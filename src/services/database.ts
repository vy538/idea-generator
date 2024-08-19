import { getDatabase, ref, get, push, set, update } from 'firebase/database';
import { Idea, GalleryItem, User, Category } from '../types';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDefaultImage } from '../utils/ideaUtils';

const db = getDatabase();

export const addIdea = async (category: Category, idea: Omit<Idea, 'image'>): Promise<void> => {
  const ideasRef = ref(db, `ideas/${category}`);
  const newIdeaRef = push(ideasRef);
  const newIdea: Idea = {
    ...idea,
    image: getDefaultImage(category),
  };
  await set(newIdeaRef, newIdea);
};

// Update fetchIdeas to ensure consistent structure
export const fetchIdeas = async (): Promise<Record<Category, Idea[]>> => {
  const ideasRef = ref(db, 'ideas');
  const snapshot = await get(ideasRef);
  const rawData = snapshot.val() || {};
  
  const categories: Category[] = ['adjective', 'character', 'location', 'verb', 'element'];
  const structuredData: Record<Category, Idea[]> = {} as Record<Category, Idea[]>;

  categories.forEach(category => {
    structuredData[category] = Object.values(rawData[category] || {}).map((idea: any) => ({
      category,
      text: idea.text,
      image: idea.image || getDefaultImage(category),
    }));
  });

  return structuredData;
};

export const fetchGalleryItems = async (): Promise<GalleryItem[]> => {
  const galleryRef = ref(db, 'gallery');
  const snapshot = await get(galleryRef);
  return Object.values(snapshot.val() || {});
};

export const addGalleryItem = async (item: GalleryItem): Promise<void> => {
  const galleryRef = ref(db, 'gallery');
  await push(galleryRef, item);
};


export const fetchUsers = async (): Promise<User[]> => {
  const db = getDatabase();
  const usersRef = ref(db, 'users');
  const snapshot = await get(usersRef);
  const usersData = snapshot.val() || {};
  
  return Object.entries(usersData).map(([uid, userData]: [string, any]) => ({
    uid,
    email: userData.email || '',
    name: userData.name || '',
    role: userData.role || 'user',
    inviteCode: userData.inviteCode || null,
    hasInviteCode: !!userData.inviteCode,
    favoriteIdeas: userData.favoriteIdeas || []
  }));
};

export const storeUserData = async (userData: Omit<User, 'storedIdeas' | 'inviteCode' | 'hasInviteCode'>): Promise<void> => {
  const db = getDatabase();
  const userRef = ref(db, `users/${userData.uid}`);
  
  // First, get existing user data
  const snapshot = await get(userRef);
  const existingData = snapshot.val() || {};
  
  // Merge new data with existing data
  const updatedData: User = {
    ...existingData,
    ...userData,
    inviteCode: existingData.inviteCode || null,
    hasInviteCode: !!existingData.inviteCode,
    favoriteIdeas: existingData.favoriteIdeas || [],
  };
  
  await set(userRef, updatedData);
};

export const checkInviteCode = async (uid: string): Promise<boolean> => {
  const db = getDatabase();
  const userRef = ref(db, `users/${uid}`);
  const snapshot = await get(userRef);
  const userData = snapshot.val();
  return !!userData?.inviteCode;
};

export const setHasInviteCode = async (uid: string, hasInviteCode: boolean): Promise<void> => {
  const db = getDatabase();
  const userRef = ref(db, `users/${uid}`);
  console.log(`Attempting to set hasInviteCode to ${hasInviteCode} for user ${uid}`);
  try {
    await update(userRef, { hasInviteCode: hasInviteCode });
    console.log('Update successful');
  } catch (error) {
    console.error('Error updating hasInviteCode:', error);
    throw error;
  }
};


const storage = getStorage();

export const uploadImage = async (file: File, fileLocation:string): Promise<string> => {
  const fileRef = storageRef(storage, `${fileLocation}/${Date.now()}_${file.name}`);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
};

export const updateIdeaImage = async (category: Category, ideaEn: string, imageUrl: string): Promise<void> => {
  const db = getDatabase();
  const ideasRef = ref(db, `ideas/${category}`);
  const snapshot = await get(ideasRef);
  const ideas = snapshot.val();

  const ideaKey = Object.keys(ideas).find(key => ideas[key].text.en === ideaEn);

  if (ideaKey) {
    await update(ref(db, `ideas/${category}/${ideaKey}`), { image: imageUrl });
  } else {
    throw new Error('Idea not found');
  }
};

export const saveFavoriteIdea = async (uid: string, ideas: Idea[]): Promise<void> => {
  const db = getDatabase();
  const userRef = ref(db, `users/${uid}/favoriteIdeas`);
  const snapshot = await get(userRef);
  const currentFavorites = snapshot.val() || [];
  
  const newFavoriteSet = ideas.map(idea => `${idea.category}:${idea.text.en}__${idea.text.zh}`).join('|');
  
  if (!currentFavorites.includes(newFavoriteSet)) {
    await set(userRef, [...currentFavorites, newFavoriteSet]);
  }
};

export const fetchFavoriteIdeas = async (uid: string): Promise<string[]> => {
  const db = getDatabase();
  const userRef = ref(db, `users/${uid}/favoriteIdeas`);
  const snapshot = await get(userRef);
  return snapshot.val() || [];
};

export const removeFavoriteIdea = async (uid: string, ideaSet: string): Promise<void> => {
  const db = getDatabase();
  const userRef = ref(db, `users/${uid}/favoriteIdeas`);
  const snapshot = await get(userRef);
  const currentFavorites = snapshot.val() || [];
  
  const updatedFavorites = currentFavorites.filter((favorite: string) => favorite !== ideaSet);
  await set(userRef, updatedFavorites);
};

export const isIdeaSetFavorite = async (uid: string, ideas: Idea[]): Promise<boolean> => {
  const db = getDatabase();
  const userRef = ref(db, `users/${uid}/favoriteIdeas`);
  const snapshot = await get(userRef);
  const favorites = snapshot.val() || [];

  const currentIdeaSet = ideas.map(idea => `${idea.category}:${idea.text.en}__${idea.text.zh}`).join('|');
  
  return favorites.includes(currentIdeaSet);
};
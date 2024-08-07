import { getDatabase, ref, get, push, set, update } from 'firebase/database';
import { Idea, GalleryItem, User, Category } from '../types';
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
    storedIdeas: userData.storedIdeas || []
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
    storedIdeas: existingData.storedIdeas || [],
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

export const setInviteCode = async (uid: string, inviteCode: string): Promise<void> => {
  const db = getDatabase();
  const userRef = ref(db, `users/${uid}`);
  await update(userRef, { 
    inviteCode, 
    hasInviteCode: inviteCode !== '' 
  });
};
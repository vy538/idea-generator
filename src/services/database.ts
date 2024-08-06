import { getDatabase, ref, get, push, set } from 'firebase/database';
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

export const checkInviteCode = async (code: string): Promise<boolean> => {
  const inviteCodesRef = ref(db, 'inviteCodes');
  const snapshot = await get(inviteCodesRef);
  const inviteCodes = snapshot.val() || {};
  return Object.values(inviteCodes).includes(code);
};

export const addInviteCode = async (code: string): Promise<void> => {
  const inviteCodesRef = ref(db, 'inviteCodes');
  await push(inviteCodesRef, code);
};
export const fetchUsers = async (): Promise<User[]> => {
  const usersRef = ref(db, 'users');
  const snapshot = await get(usersRef);
  return Object.values(snapshot.val() || {});
};
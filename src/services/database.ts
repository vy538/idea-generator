import { getDatabase, ref, get, set, push, remove } from 'firebase/database';
import { Idea, GalleryItem } from '../types';

const db = getDatabase();

export const fetchIdeas = async (): Promise<Record<string, Idea[]>> => {
  const ideasRef = ref(db, 'ideas');
  const snapshot = await get(ideasRef);
  return snapshot.val() || {};
};

export const addIdea = async (category: string, idea: Idea): Promise<void> => {
  const ideasRef = ref(db, `ideas/${category}`);
  await push(ideasRef, idea);
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
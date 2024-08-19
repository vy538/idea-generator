// src/types/index.ts

export type Category = 'adjective' | 'character' | 'location' | 'verb' | 'element';

export interface Language {
  en: string;
  zh: string;
}

export interface Idea {
  category: Category;
  text: Language;
  image: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  author: Author;
  ideaReferences: IdeaReference[];
}

export interface SocialMedia {
  platform: string;
  handle: string;
}

export interface Author {
  name: string;
  email: string;
  socialMedia: SocialMedia[];
}

export interface IdeaReference {
  category: Category;
  id: string;
}
export interface User {
  uid: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  hasInviteCode: boolean;
  favoriteIdeas?: string[];
}
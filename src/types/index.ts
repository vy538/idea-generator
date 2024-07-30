// src/types/index.ts

export type Category = 'adjective' | 'character' | 'location' | 'verb' | 'element';

export interface IdeaTag {
  en: string;
  zh: string;
}

export interface Idea {
  category: Category;
  text: IdeaTag;
  image: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  author: Author;
  ideaReferences: IdeaReference[];
}

export interface Author {
  name: string;
  email: string;
  instagram: string;
  github: string;
}

export interface IdeaReference {
  category: Category;
  id: string;
}
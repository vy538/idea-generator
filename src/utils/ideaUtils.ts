// src/utils/ideaUtils.ts

import { Category, Idea } from '../types';

export const parseIdeas = (data: Record<string, Record<string, Idea>>): Idea[] => {
  return Object.entries(data).flatMap(([category, ideas]) =>
    Object.entries(ideas).map(([id, idea]) => ({
      ...idea,
      id,
      category: category as Idea['category']
    }))
  );
};

export const getDefaultImage = (category: Category): string => {
  switch (category) {
    case 'character':
      return '/assets/images/ideas/char.png';
    case 'adjective':
      return '/assets/images/ideas/adj.png';
    case 'location':
      return '/assets/images/ideas/loc.png';
    case 'verb':
      return '/assets/images/ideas/verb.png';
    case 'element':
      return '/assets/images/ideas/elem.png';
    default:
      return '/assets/images/ideas/default.png';
  }
};
// src/utils/ideaUtils.ts

import { Idea } from '../types';

export const parseIdeas = (data: Record<string, Record<string, Idea>>): Idea[] => {
  return Object.entries(data).flatMap(([category, ideas]) =>
    Object.entries(ideas).map(([id, idea]) => ({
      ...idea,
      id,
      category: category as Idea['category']
    }))
  );
};
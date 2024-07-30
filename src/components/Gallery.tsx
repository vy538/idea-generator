// src/components/Gallery.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GalleryWrapper } from '../styles/GalleryStyles';
import GalleryItem from './GalleryItem';
import galleryData from '../data/gallery.json';
import { ideas } from '../data/ideas';
import { GalleryItem as GalleryItemType, Idea, Category } from '../types';

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const getIdeaById = (category: Category, id: string): Idea | undefined => {
    return ideas[category].find(idea => idea.text.en === id || idea.text.zh === id);
  };

  return (
    <GalleryWrapper>
      {(galleryData as GalleryItemType[]).map((item: GalleryItemType) => (
        <GalleryItem 
          key={item.id}
          item={item}
          getIdeaById={getIdeaById}
        />
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
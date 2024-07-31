import React, { useState } from 'react';
import { GalleryWrapper } from '../styles/GalleryStyles';
import GalleryItem from './GalleryItem';
import EnlargedView from './EnlargedView';
import galleryData from '../data/gallery.json';
import { ideas } from '../data/ideas';
import { GalleryItem as GalleryItemType, Idea, Category } from '../types';

const Gallery: React.FC = () => {
  const [enlargedItem, setEnlargedItem] = useState<GalleryItemType | null>(null);

  const getIdeaById = (category: Category, id: string): Idea | undefined => {
    return ideas[category].find(idea => idea.text.en === id || idea.text.zh === id);
  };

  const handleItemClick = (item: GalleryItemType) => {
    setEnlargedItem(item);
  };

  const handleCloseEnlargedView = () => {
    setEnlargedItem(null);
  };

  return (
    <>
      <GalleryWrapper>
        {(galleryData as GalleryItemType[]).map((item: GalleryItemType) => (
          <GalleryItem 
            key={item.id}
            item={item}
            getIdeaById={getIdeaById}
            onItemClick={handleItemClick}
          />
        ))}
      </GalleryWrapper>
      {enlargedItem && (
        <EnlargedView 
          imageUrl={enlargedItem.imageUrl}
          onClose={handleCloseEnlargedView}
        />
      )}
    </>
  );
};

export default Gallery;
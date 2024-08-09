import React, { useState, useEffect } from 'react';
import { GalleryWrapper } from '../styles/GalleryStyles';
import GalleryItem from './GalleryItem';
import EnlargedView from './EnlargedView';
import { fetchGalleryItems, fetchIdeas } from '../services/database';
import { GalleryItem as GalleryItemType, Idea, Category } from '../types';

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItemType[]>([]);
  const [allIdeas, setAllIdeas] = useState<Record<string, Idea[]>>({});
  const [enlargedItem, setEnlargedItem] = useState<GalleryItemType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [items, ideas] = await Promise.all([fetchGalleryItems(), fetchIdeas()]);
        setGalleryItems(items);
        setAllIdeas(ideas);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getIdeaById = (category: Category, id: string): Idea | undefined => {
    return allIdeas[category]?.find(idea => idea.text.en === id || idea.text.zh === id);
  };

  const handleItemClick = (item: GalleryItemType) => {
    setEnlargedItem(item);
  };

  const handleCloseEnlargedView = () => {
    setEnlargedItem(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error in gallery: {error.message}</div>;

  return (
    <>
      <GalleryWrapper>
        {galleryItems.map((item: GalleryItemType) => (
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
          item={enlargedItem}
          onClose={handleCloseEnlargedView}
          getIdeaById={getIdeaById}
        />
      )}
    </>
  );
};

export default Gallery;
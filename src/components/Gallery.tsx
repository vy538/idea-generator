// src/components/Gallery.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  GalleryWrapper,
  IllustrationCard,
  IllustrationImage,
  TagsContainer,
  Tag,
  AuthorInfo
} from '../styles/GalleryStyles';
import galleryData from '../data/gallery.json';
import { ideas } from '../data/ideas';
import { GalleryItem, Idea, Category } from '../types';

const Gallery: React.FC = () => {
  const { t, i18n } = useTranslation();

  const getIdeaById = (category: Category, id: string): Idea | undefined => {
  return ideas[category].find(idea => idea.text.en === id || idea.text.zh === id);
};

  return (
    <GalleryWrapper>
      {(galleryData as GalleryItem[]).map((item: GalleryItem) => (
        <IllustrationCard key={item.id}>
          <IllustrationImage src={item.imageUrl} alt={`Illustration ${item.id}`} />
          <TagsContainer>
            {item.ideaReferences.map((ref, index) => {
              const idea = getIdeaById(ref.category, ref.id);
              if (!idea) return null;
              return (
                <Tag key={index}>
                  {t(`categories.${ref.category}`)}: {i18n.language.startsWith('zh') ? idea.text.zh : idea.text.en}
                </Tag>
              );
            })}
          </TagsContainer>
          <AuthorInfo>
            <p>{item.author.name}</p>
            <p>{item.author.email}</p>
            <p>{item.author.instagram}</p>
            <p>{item.author.github}</p>
          </AuthorInfo>
        </IllustrationCard>
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
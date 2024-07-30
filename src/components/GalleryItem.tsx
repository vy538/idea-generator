// src/components/GalleryItem.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  IllustrationCard,
  IllustrationImage,
  Overlay,
  AuthorInfo,
  TagsContainer,
  Tag
} from '../styles/GalleryStyles';
import { GalleryItem as GalleryItemType, Idea, Category } from '../types';

interface GalleryItemProps {
  item: GalleryItemType;
  getIdeaById: (category: Category, id: string) => Idea | undefined;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, getIdeaById }) => {
  const { t, i18n } = useTranslation();

  return (
    <IllustrationCard>
      <IllustrationImage src={item.imageUrl} alt={`Illustration ${item.id}`} />
      <Overlay className="overlay">
        <AuthorInfo lang={i18n.language as 'en' | 'zh'}>{item.author.instagram}</AuthorInfo>
        <TagsContainer>
          {item.ideaReferences.map((ref, index) => {
            const idea = getIdeaById(ref.category, ref.id);
            if (!idea) return null;
            return (
              <Tag lang={i18n.language as 'en' | 'zh'} key={index} category={ref.category}>
                {t(`categories.${ref.category}`)}: {i18n.language.startsWith('zh') ? idea.text.zh : idea.text.en}
              </Tag>
            );
          })}
        </TagsContainer>
      </Overlay>
    </IllustrationCard>
  );
};

export default GalleryItem;
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
import { useMediaQuery } from 'react-responsive';
import { theme } from '../styles/theme';

interface GalleryItemProps {
  item: GalleryItemType;
  getIdeaById: (category: Category, id: string) => Idea | undefined;
  onItemClick: (item: GalleryItemType) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, getIdeaById, onItemClick }) => {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.mobile });

  return (
    <IllustrationCard onClick={() => onItemClick(item)}>
      <IllustrationImage src={item.imageUrl} alt={`Illustration ${item.id}`} />
      <Overlay className="overlay">
        <AuthorInfo lang={i18n.language as 'en' | 'zh'}>{item.author.instagram}</AuthorInfo>
        <TagsContainer>
          {item.ideaReferences.map((ref, index) => {
            const idea = getIdeaById(ref.category, ref.id);
            if (!idea) return null;
            return (
              <Tag lang={i18n.language as 'en' | 'zh'} key={index} category={ref.category}>
                {isMobile ? t(`categories.${ref.category}`).charAt(0) : t(`categories.${ref.category}`)}:
                {' '}
                {i18n.language.startsWith('zh') ? idea.text.zh : idea.text.en}
              </Tag>
            );
          })}
        </TagsContainer>
      </Overlay>
    </IllustrationCard>
  );
};

export default GalleryItem;
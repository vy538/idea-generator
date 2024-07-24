import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  GalleryWrapper,
  IllustrationCard,
  IllustrationImage,
  TagsContainer,
  Tag
} from '../styles/GalleryStyles';
import { Idea } from '../data/ideas';

// Mock data for illustrations - replace with actual data later
const mockIllustrations: { imageUrl: string; ideas: Idea[] }[] = [
  {
    imageUrl: 'https://example.com/image1.jpg',
    ideas: [
      { category: 'adjective', text: { en: 'Mysterious', zh: '神秘的' } },
      { category: 'character', text: { en: 'Wizard', zh: '魔法師' } },
      { category: 'location', text: { en: 'Ancient Forest', zh: '古老森林' } },
    ]
  },
  // Add more mock illustrations as needed
];

const Gallery: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <GalleryWrapper>
      {mockIllustrations.map((illustration, index) => (
        <IllustrationCard key={index}>
          <IllustrationImage src={illustration.imageUrl} alt={`Illustration ${index + 1}`} />
          <TagsContainer>
            {illustration.ideas.map((idea, ideaIndex) => (
              <Tag key={ideaIndex}>
                {t(`categories.${idea.category}`)}: {i18n.language.startsWith('zh') ? idea.text.zh : idea.text.en}
              </Tag>
            ))}
          </TagsContainer>
        </IllustrationCard>
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
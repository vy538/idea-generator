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
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikmx4VupmJ8_0o_0tXxKyfMIPBsSCW1WPqe69larq_HT0wF2TDj4Mj0CCi3AEaFMo0atevfDN5I7D2l-Fuykaxm0FM2HKyIrMTW0WXmV5fTJcuLzH4wCDAoKPL8q3bqUEBz4lgG7ovjGU/s180-c/kandume_tomato.png',
    ideas: [
      { category: 'adjective', text: { en: 'Mysterious', zh: '神秘的'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
      { category: 'character', text: { en: 'Wizard', zh: '魔法師'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
      { category: 'location', text: { en: 'Ancient Forest', zh: '古老森林'}, image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOCiIKPOlZd_ln1VFeO0Ps4KO7vOHZiCSiQegD06giTH2E0vUzwQPX_uuEdpp2eWhF37cJ4V2MkyJdX9E1IIQIYFUy1qBH1T5FDifC53LSlpdVCCRZE9kbuXLo2AidIFqswVoyoEmEikIU/s800/tomato_red.png"},
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
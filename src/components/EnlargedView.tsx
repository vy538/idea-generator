import React from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import {
  Overlay,
  ContentWrapper,
  SocialMediaContainer,
  SocialMediaLink,
  IdeasContainer,
  IdeaTag,
  EnlargedImage,
  CloseButton,
} from '../styles/EnlargedViewStyles';
import { GalleryItem, Idea, Category, IdeaReference } from '../types';
import { Instagram, Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
// Map social media platforms to their corresponding MUI icons
const socialMediaIcons: Record<string, typeof SvgIcon> = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: LinkedIn,
  // Add more mappings as needed
};
interface EnlargedViewProps {
  item: GalleryItem;
  onClose: () => void;
  getIdeaById: (category: Category, id: string) => Idea | undefined;
}

const EnlargedView: React.FC<EnlargedViewProps> = ({ item, onClose, getIdeaById }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'zh';

  // Assuming we're only showing the first social media handle
  const primarySocial = item.author.socialMedia[0];
  const IconComponent = primarySocial ? socialMediaIcons[primarySocial.platform] : null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ContentWrapper>
        <SocialMediaContainer>
          {primarySocial && (
            <SocialMediaLink 
              href={`https://${primarySocial.platform}.com/${primarySocial.handle}`} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {IconComponent && <IconComponent fontSize="small" style={{ color: 'white' }} />}
              @{primarySocial.handle}
            </SocialMediaLink>
          )}
        </SocialMediaContainer>
        <IdeasContainer>
          {item.ideaReferences.map((ideaRef: IdeaReference) => {
            const idea = getIdeaById(ideaRef.category, ideaRef.id);
            return idea && (
              <IdeaTag key={`${ideaRef.category}-${ideaRef.id}`} lang={currentLang}>
                {`${ideaRef.category}: ${idea.text[currentLang]}`}
              </IdeaTag>
            );
          })}
        </IdeasContainer>
        <EnlargedImage 
          src={item.imageUrl} 
          alt={`Illustration by ${item.author.name}`} 
          onClick={(e) => e.stopPropagation()}
        />
      </ContentWrapper>
      <CloseButton onClick={onClose}>
        <img src="/assets/icons/close-icon.svg" alt="Close" />
      </CloseButton>
    </Overlay>,
    document.body
  );
};

export default EnlargedView;
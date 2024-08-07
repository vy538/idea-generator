// src/pages/UploadCreationPage.tsx

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { H1, Body } from '../styles/Typography';
import { UploadCreationPageWrapper } from '../styles/LayoutStyles';
import { UploadCreationWrapper } from '../styles/UploadCreationStyles';
import { useAuthContext } from '../hooks/AuthContext';
import { addGalleryItem, fetchIdeas } from '../services/database';
import { GalleryItem, IdeaReference, Idea, Category, SocialMedia } from '../types';
import UploadCreationForm from '../components/UploadCreationForm';

const UploadCreationPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user, hasInviteCode, userRole } = useAuthContext();
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [ideas, setIdeas] = useState<Record<Category, Idea[]>>({} as Record<Category, Idea[]>);

  useEffect(() => {
    const loadIdeas = async () => {
      const fetchedIdeas = await fetchIdeas();
      setIdeas(fetchedIdeas);
    };
    loadIdeas();
  }, []);

  const handleSubmit = async (imageFile: File, ideaReferences: IdeaReference[], socialMedia: SocialMedia[]) => {
    if (!user) return;

    setIsUploading(true);
    try {
      const imageUrl = URL.createObjectURL(imageFile);

      const newGalleryItem: GalleryItem = {
        id: Date.now(),
        imageUrl,
        author: {
          name: user.displayName || '',
          email: user.email || '',
          socialMedia,
        },
        ideaReferences,
      };

      await addGalleryItem(newGalleryItem);
      navigate('/gallery');
    } catch (error) {
      console.error('Error uploading creation:', error);
      alert(t('uploadCreation.error'));
    } finally {
      setIsUploading(false);
    }
  };

  if (!user) {
    return (
      <UploadCreationPageWrapper>
        <Body lang={i18n.language as 'en' | 'zh'}>{t('uploadCreation.loginRequired')}</Body>
      </UploadCreationPageWrapper>
    );
  }

  if (!hasInviteCode && userRole !== 'admin') {
    return (
      <UploadCreationPageWrapper>
        <Body lang={i18n.language as 'en' | 'zh'}>{t('uploadCreation.inviteRequired')}</Body>
      </UploadCreationPageWrapper>
    );
  }

  return (
    <UploadCreationPageWrapper>
      <UploadCreationWrapper>
        <H1 lang={i18n.language as 'en' | 'zh'}>{t('uploadCreation.title')}</H1>
        <UploadCreationForm onSubmit={handleSubmit} isUploading={isUploading} ideas={ideas} />
      </UploadCreationWrapper>
    </UploadCreationPageWrapper>
  );
};

export default UploadCreationPage;
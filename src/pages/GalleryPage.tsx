import React from 'react';
import { GalleryPageWrapper } from '../styles/LayoutStyles';
import { useTranslation } from 'react-i18next';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <GalleryPageWrapper>
      <h1>{t('gallery.title')}</h1>
      <Gallery />
    </GalleryPageWrapper>
  );
};

export default GalleryPage;
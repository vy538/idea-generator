import React from 'react';
import { useTranslation } from 'react-i18next';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('gallery.title')}</h1>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
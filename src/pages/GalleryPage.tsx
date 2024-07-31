import React from 'react';
import { GalleryPageWrapper } from '../styles/LayoutStyles';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {

  return (
    <GalleryPageWrapper>
      <Gallery />
    </GalleryPageWrapper>
  );
};

export default GalleryPage;
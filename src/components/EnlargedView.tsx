import React from 'react';
import { Overlay, EnlargedImage, CloseButton } from '../styles/EnlargedViewStyles';

interface EnlargedViewProps {
  imageUrl: string;
  onClose: () => void;
}


const EnlargedView: React.FC<EnlargedViewProps> = ({ imageUrl, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <EnlargedImage src={imageUrl} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
      <CloseButton onClick={onClose}>
        <img src="/assets/icons/close-icon.svg" alt="Close" />
      </CloseButton>
    </Overlay>
  );
};

export default EnlargedView;
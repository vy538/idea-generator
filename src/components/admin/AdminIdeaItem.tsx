// src/components/admin/AdminIdeaItem.tsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Idea } from '../../types';
import { uploadImage } from '../../services/database';
import {
  StyledCard,
  ImageContainer,
  StyledCardMedia,
  StyledCardContent,
  StyledCardActions,
  FileInput,
  CenteredTypography,
  AdminButton,
  AdminDeleteButton
} from '../../styles/AdminPageStyles';

interface Props {
  idea: Idea;
  onAddImage: (ideaEn: string, imageUrl: string) => void;
  onDeleteIdea: (ideaEn: string, category: string) => void;
}

const AdminIdeaItem: React.FC<Props> = ({ idea, onAddImage, onDeleteIdea }) => {
  const { t } = useTranslation();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleAddImage = async () => {
    if (imageFile) {
      setIsUploading(true);
      try {
        const imageUrl = await uploadImage(imageFile,`ideas/${idea.category}`);
        onAddImage(idea.text.en, imageUrl);
        setImageFile(null);
      } catch (error) {
        console.error('Error uploading image:', error);
        // You might want to show an error message to the user here
      } finally {
        setIsUploading(false);
      }
    }
  };

 return (
    <StyledCard>
      <ImageContainer>
        <StyledCardMedia
          component="img"
          image={idea.image || '/placeholder-image.jpg'}
          alt={idea.text.en}
        />
      </ImageContainer>
      <StyledCardContent>
        <CenteredTypography>
          <Typography variant="h6" component="div" gutterBottom>
            {idea.text.en} / {idea.text.zh}
          </Typography>
        </CenteredTypography>
        <FileInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </StyledCardContent>
      <StyledCardActions>
        <AdminButton 
          onClick={handleAddImage} 
          disabled={!imageFile || isUploading}
        >
          {isUploading ? t('admin.uploading') : t('admin.addImageButton')}
        </AdminButton>
        <AdminDeleteButton 
          onClick={() => onDeleteIdea(idea.text.en, idea.category)}
        >
          {t('admin.deleteButton')}
        </AdminDeleteButton>
      </StyledCardActions>
    </StyledCard>
  );
};


export default AdminIdeaItem;
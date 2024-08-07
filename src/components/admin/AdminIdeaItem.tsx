// src/components/admin/AdminIdeaItem.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Idea } from '../../types';

interface Props {
  idea: Idea;
  onAddImage: (ideaEn: string, imageUrl: string) => void;
  onDeleteIdea: (ideaEn: string, category: string) => void;
}

const AdminIdeaItem: React.FC<Props> = ({ idea, onAddImage, onDeleteIdea }) => {
  const { t } = useTranslation();
  const [imageUrl, setImageUrl] = React.useState('');

  const handleAddImage = () => {
    onAddImage(idea.text.en, imageUrl);
    setImageUrl('');
  };

  return (
    <Box sx={{ mb: 3, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {idea.text.en} / {idea.text.zh}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {t('admin.category')}: {t(`categories.${idea.category}`)}
      </Typography>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder={t('admin.imageUrlPlaceholder')}
          sx={{ mr: 1 }}
        />
        <Button variant="contained" onClick={handleAddImage} disabled={!imageUrl}>
          {t('admin.addImageButton')}
        </Button>
      </Box>
      <Button 
        variant="contained" 
        color="error" 
        onClick={() => onDeleteIdea(idea.text.en, idea.category)}
      >
        {t('admin.deleteButton')}
      </Button>
    </Box>
  );
};

export default AdminIdeaItem;
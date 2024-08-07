// src/components/admin/AdminIdeaItem.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, TextField, Button, Card, CardContent, CardActions } from '@mui/material';
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
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {idea.text.en} / {idea.text.zh}
        </Typography>
        <TextField
          fullWidth
          size="small"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder={t('admin.imageUrlPlaceholder')}
          sx={{ mb: 2 }}
        />
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
        <Button 
          variant="contained" 
          onClick={handleAddImage} 
          disabled={!imageUrl}
          fullWidth
        >
          {t('admin.addImageButton')}
        </Button>
      </CardActions>
      <CardActions>
        <Button 
          variant="outlined" 
          color="error" 
          onClick={() => onDeleteIdea(idea.text.en, idea.category)}
          fullWidth
        >
          {t('admin.deleteButton')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdminIdeaItem;
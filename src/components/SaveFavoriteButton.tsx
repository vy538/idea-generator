import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { Idea } from '../types';
import { saveFavoriteIdea } from '../services/database';
import { useAuth } from '../hooks/useAuth';

interface Props {
  ideas: Idea[];
}

const SaveFavoriteButton: React.FC<Props> = ({ ideas }) => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const handleSaveFavorite = async () => {
    if (user) {
      const ideaSet = ideas.map(idea => `${idea.category}:${idea.text.en}`).join('|');
      await saveFavoriteIdea(user.uid, ideaSet);
      alert(t('favorites.saved'));
    } else {
      alert(t('favorites.loginRequired'));
    }
  };

  return (
    <Button onClick={handleSaveFavorite} variant="contained" color="secondary">
      {t('favorites.save')}
    </Button>
  );
};

export default SaveFavoriteButton;
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchFavoriteIdeas } from '../services/database';
import { useAuth } from '../hooks/useAuth';
import { GalleryPageWrapper } from '../styles/LayoutStyles';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const FavoritesPage: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      fetchFavoriteIdeas(user.uid).then(setFavorites);
    }
  }, [user]);

  const renderFavoriteSet = (ideaSet: string) => {
    const ideas = ideaSet.split('|').map(idea => {
      const [category, text] = idea.split(':');
      return { category, text };
    });

    return (
      <Card>
        <CardContent>
          {ideas.map((idea, index) => (
            <Typography key={index}>
              {t(`categories.${idea.category}`)}: {idea.text}
            </Typography>
          ))}
        </CardContent>
      </Card>
    );
  };

  return (
    <GalleryPageWrapper>
      <Typography variant="h1" gutterBottom>
        {t('favorites.title')}
      </Typography>
      <Grid container spacing={2}>
        {favorites.map((favoriteSet, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {renderFavoriteSet(favoriteSet)}
          </Grid>
        ))}
      </Grid>
    </GalleryPageWrapper>
  );
};

export default FavoritesPage;
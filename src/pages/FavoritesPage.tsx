import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchFavoriteIdeas, removeFavoriteIdea } from '../services/database';
import { useAuth } from '../hooks/useAuth';
import { GalleryPageWrapper } from '../styles/LayoutStyles';
import { Grid, Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const StyledCard = styled(Card)`
  background-color: ${theme.colors.secondaryAccent};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CategoryTypography = styled(Typography)`
  font-weight: ${theme.fonts.en.weights.bold};
  color: ${theme.colors.darkPrimaryAccent};
  margin-bottom: 4px;
`;

const IdeaTypography = styled(Typography)`
  color: ${theme.colors.primaryText};
  margin-bottom: 8px;
`;

const RemoveButton = styled(IconButton)`
  align-self: flex-end;
  margin-top: auto;
  color: ${theme.colors.darkSecondaryAccent};

  &:hover {
    color: ${theme.colors.darkPrimaryAccent};
  }
`;

const FavoritesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      fetchFavoriteIdeas(user.uid).then(setFavorites);
    }
  }, [user]);

  const handleRemoveFavorite = async (ideaSet: string) => {
    if (user) {
      await removeFavoriteIdea(user.uid, ideaSet);
      setFavorites(prevFavorites => prevFavorites.filter(fav => fav !== ideaSet));
    }
  };

  const renderFavoriteSet = (ideaSet: string) => {
    const ideas = ideaSet.split('|').map(idea => {
      const [category, text] = idea.split(':');
      const [en, zh] = text.split('__');
      return { category, en, zh };
    });

    return (
      <StyledCard>
        <StyledCardContent>
          {ideas.map((idea, index) => (
            <Box key={index}>
              <CategoryTypography variant="subtitle2">
                {t(`categories.${idea.category}`)}
              </CategoryTypography>
              <IdeaTypography variant="body1">
                {i18n.language === 'zh' ? idea.zh : idea.en}
              </IdeaTypography>
            </Box>
          ))}
          <RemoveButton onClick={() => handleRemoveFavorite(ideaSet)} aria-label="remove">
            <DeleteIcon />
          </RemoveButton>
        </StyledCardContent>
      </StyledCard>
    );
  };

  return (
    <GalleryPageWrapper>
      <Typography variant="h1" gutterBottom color={theme.colors.primaryText}>
        {t('favorites.title')}
      </Typography>
      {favorites.length === 0 ? (
        <Typography variant="body1" color={theme.colors.secondaryText}>
          {t('favorites.empty')}
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((favoriteSet, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {renderFavoriteSet(favoriteSet)}
            </Grid>
          ))}
        </Grid>
      )}
    </GalleryPageWrapper>
  );
};

export default FavoritesPage;
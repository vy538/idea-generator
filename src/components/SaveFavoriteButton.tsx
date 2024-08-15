import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Idea } from '../types';
import { saveFavoriteIdea, removeFavoriteIdea, isIdeaSetFavorite } from '../services/database';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';
import { theme } from '../styles/theme';

interface Props {
  ideas: Idea[];
}

const StyledIconButton = styled(IconButton)`
  color: ${props => props.color};
  &:hover {
    color: ${theme.colors.darkPrimaryAccent};
  }
`;

const SaveFavoriteButton: React.FC<Props> = ({ ideas }) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      if (user) {
        const favorite = await isIdeaSetFavorite(user.uid, ideas);
        setIsFavorite(favorite);
      }
    };
    checkFavorite();
  }, [user, ideas]);

  const handleSaveFavorite = async () => {
    if (user) {
      if (isFavorite) {
        const ideaSet = ideas.map(idea => `${idea.category}:${idea.text.en}__${idea.text.zh}`).join('|');
        await removeFavoriteIdea(user.uid, ideaSet);
        setIsFavorite(false);
        alert(t('favorites.removed'));
      } else {
        await saveFavoriteIdea(user.uid, ideas);
        setIsFavorite(true);
        alert(t('favorites.saved'));
      }
    } else {
      alert(t('favorites.loginRequired'));
    }
  };

  return (
    <Tooltip title={isFavorite ? t('favorites.remove') : t('favorites.save')}>
      <StyledIconButton
        onClick={handleSaveFavorite}
        color={isFavorite ? "secondary" : "default"}
        aria-label={isFavorite ? t('favorites.remove') : t('favorites.save')}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </StyledIconButton>
    </Tooltip>
  );
};

export default SaveFavoriteButton;
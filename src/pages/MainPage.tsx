import React from 'react';
import { useTranslation } from 'react-i18next';
import SlotMachine from '../components/SlotMachine';
import SaveFavoriteButton from '../components/SaveFavoriteButton';
import { useRandomIdeas } from '../hooks/useRandomIdeas';
import { MainPageWrapper, VideoBackground } from '../styles/LayoutStyles';
import { Box } from '@mui/material';

const MainPage: React.FC = () => {
  const { t } = useTranslation();
  const { ideas, spinning, loading, error, refetch } = useRandomIdeas();

  if (loading) return <div>{t('mainPage.loading')}</div>;
  if (error) return <div>{t('mainPage.error', { message: error.message })}</div>;

  return (
    <>
      <VideoBackground autoPlay loop muted playsInline>
        <source src="/assets/video/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <MainPageWrapper>
        <SlotMachine ideas={ideas} spinning={spinning} onGenerate={refetch} />
        <Box mt={2}>
          <SaveFavoriteButton ideas={ideas} />
        </Box>
      </MainPageWrapper>
    </>
  );
};

export default MainPage;
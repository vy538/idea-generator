import React from 'react';
import { useTranslation } from 'react-i18next';
import SlotMachine from '../components/SlotMachine';
import { useRandomIdeas } from '../hooks/useRandomIdeas';
import { MainPageWrapper } from '../styles/LayoutStyles';

const MainPage: React.FC = () => {
  const { t } = useTranslation();
  const { ideas, spinning, loading, error, refetch } = useRandomIdeas();

  if (loading) return <div>{t('mainPage.loading')}</div>;
  if (error) return <div>{t('mainPage.error', { message: error.message })}</div>;

  return (
    <MainPageWrapper>
      <SlotMachine ideas={ideas} spinning={spinning} onGenerate={refetch} />
    </MainPageWrapper>
  );
};

export default MainPage;
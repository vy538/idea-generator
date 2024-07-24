import React from 'react';
import { useTranslation } from 'react-i18next';
import SlotMachine from '../components/SlotMachine';
import GenerateButton from '../components/GenerateButton';
import { useRandomIdeas } from '../hooks/useRandomIdeas';

const MainPage: React.FC = () => {
  const { t } = useTranslation();
  const { ideas, loading, error, refetch } = useRandomIdeas();

  if (loading) return <div>{t('mainPage.loading')}</div>;
  if (error) return <div>{t('mainPage.error', { message: error.message })}</div>;

  return (
    <div>
      <SlotMachine ideas={ideas} />
      <GenerateButton onClick={refetch} />
    </div>
  );
};

export default MainPage;
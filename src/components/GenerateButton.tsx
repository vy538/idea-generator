import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onClick: () => void;
}

const GenerateButton: React.FC<Props> = ({ onClick }) => {
  const { t } = useTranslation();
  return <button onClick={onClick}>{t('mainPage.generate')}</button>;
};

export default GenerateButton;
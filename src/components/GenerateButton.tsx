import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '../styles/GenerateButtonStyles';

interface Props {
  onClick: () => void;
}

const GenerateButton: React.FC<Props> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <StyledButton onClick={onClick}>
      {t('mainPage.generate')}
    </StyledButton>
  );
};

export default GenerateButton;
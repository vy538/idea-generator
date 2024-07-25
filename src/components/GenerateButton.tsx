import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '../styles/GenerateButtonStyles';

interface Props {
  onClick: () => void;
  disabled: boolean;
}

const GenerateButton: React.FC<Props> = ({ onClick, disabled }) => {
  const { t } = useTranslation();

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {t('mainPage.generate')}
    </StyledButton>
  );
};

export default GenerateButton;
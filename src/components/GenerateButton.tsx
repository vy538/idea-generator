import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '../styles/GenerateButtonStyles';
import i18n from '../i18n';

interface Props {
  onClick: () => void;
}

const GenerateButton: React.FC<Props> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <StyledButton onClick={onClick} lang={i18n.language as 'en' | 'zh'}>
      {t('generate')}
    </StyledButton>
  );
};

export default GenerateButton;
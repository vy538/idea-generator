// src/pages/InviteRequiredPage.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { H1, Body } from '../styles/Typography';
import { PageWrapper } from '../styles/LayoutStyles';

const InviteRequiredPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <PageWrapper>
      <H1 lang={i18n.language as 'en' | 'zh'}>{t('inviteRequired.title')}</H1>
      <Body lang={i18n.language as 'en' | 'zh'}>{t('inviteRequired.message')}</Body>
    </PageWrapper>
  );
};

export default InviteRequiredPage;
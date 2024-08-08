import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderWrapper, Nav, LanguageButton, LanguageSelector, LogoWrapper } from '../styles/HeaderStyles';
import { NavBarLink } from '../styles/Typography';

import { useTheme } from 'styled-components';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'zh';
  const theme = useTheme();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HeaderWrapper lang={currentLang}>
      <Nav>
        <NavBarLink to="/" lang={currentLang}>{t('header.home')}</NavBarLink>
        <NavBarLink to="/gallery" lang={currentLang}>{t('header.gallery')}</NavBarLink>
      </Nav>
      <LogoWrapper>
        <img src="/logo.svg" alt="Logo" />
      </LogoWrapper>
      <LanguageSelector>
        <LanguageButton lang={currentLang} onClick={() => changeLanguage('en')}>English</LanguageButton>
        <LanguageButton lang={currentLang} onClick={() => changeLanguage('zh')}>中文</LanguageButton>
      </LanguageSelector>
    </HeaderWrapper>
  );
};

export default Header;
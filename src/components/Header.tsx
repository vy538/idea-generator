import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HeaderWrapper, Nav, LanguageButton,LanguageSelector } from '../styles/HeaderStyles';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HeaderWrapper lang={i18n.language as 'en' | 'zh'}>
      <Nav>
        <Link to="/">{t('header.home')}</Link>
        <Link to="/gallery">{t('header.gallery')}</Link>
      </Nav>
      <LanguageSelector>
        <LanguageButton onClick={() => changeLanguage('en')}>English</LanguageButton>
        <LanguageButton onClick={() => changeLanguage('zh')}>中文</LanguageButton>
      </LanguageSelector>
    </HeaderWrapper>
  );
};

export default Header;
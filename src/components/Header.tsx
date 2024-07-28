import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderWrapper, Nav, LanguageButton, LanguageSelector, NavLink } from '../styles/HeaderStyles';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'zh';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HeaderWrapper lang={currentLang}>
      <Nav>
        <NavLink to="/" lang={currentLang}>{t('header.home')}</NavLink>
        <NavLink to="/gallery" lang={currentLang}>{t('header.gallery')}</NavLink>
      </Nav>
      <LanguageSelector>
        <LanguageButton lang={currentLang} onClick={() => changeLanguage('en')}>English</LanguageButton>
        <LanguageButton lang={currentLang} onClick={() => changeLanguage('zh')}>中文</LanguageButton>
      </LanguageSelector>
    </HeaderWrapper>
  );
};

export default Header;
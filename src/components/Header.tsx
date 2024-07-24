import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HeaderWrapper, Nav, LanguageButton } from '../styles/HeaderStyles';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HeaderWrapper>
      <Nav>
        <ul>
          <li><Link to="/">{t('header.home')}</Link></li>
          <li><Link to="/gallery">{t('header.gallery')}</Link></li>
        </ul>
      </Nav>
      <div>
        <LanguageButton onClick={() => changeLanguage('en')}>English</LanguageButton>
        <LanguageButton onClick={() => changeLanguage('zh')}>中文</LanguageButton>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
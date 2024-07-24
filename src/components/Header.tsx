import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">{t('header.home')}</Link></li>
          <li><Link to="/gallery">{t('header.gallery')}</Link></li>
        </ul>
      </nav>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('zh')}>中文</button>
      </div>
    </header>
  );
};

export default Header;
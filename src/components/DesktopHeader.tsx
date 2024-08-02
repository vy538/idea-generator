// DesktopHeader.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, googleProvider } from '../services/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { HeaderWrapper, Nav, LanguageButton, LanguageSelector, LogoWrapper, AuthButton } from '../styles/HeaderStyles';
import { NavBarLink } from '../styles/Typography';

const DesktopHeader: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [user] = useAuthState(auth);
  const currentLang = i18n.language as 'en' | 'zh';

  const isAdmin = user?.email === process.env.REACT_APP_ADMIN_EMAIL;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <HeaderWrapper lang={currentLang}>
      <Nav>
        <NavBarLink to="/" lang={currentLang}>{t('header.home')}</NavBarLink>
        <NavBarLink to="/gallery" lang={currentLang}>{t('header.gallery')}</NavBarLink>
        {user && <NavBarLink to="/add-idea" lang={currentLang}>{t('header.addIdea')}</NavBarLink>}
        {isAdmin && (
          <NavBarLink to="/admin" lang={currentLang}>{t('header.admin')}</NavBarLink>
        )}
      </Nav>
      <LogoWrapper>
        <img src="/logo.svg" alt="Logo" />
      </LogoWrapper>
      <LanguageSelector>
        <LanguageButton lang={currentLang} onClick={() => changeLanguage('en')}>English</LanguageButton>
        <LanguageButton lang={currentLang} onClick={() => changeLanguage('zh')}>中文</LanguageButton>
        {user ? (
          <AuthButton onClick={handleLogout}>{t('header.logout')}</AuthButton>
        ) : (
          <AuthButton onClick={handleLogin}>{t('header.login')}</AuthButton>
        )}
      </LanguageSelector>
    </HeaderWrapper>
  );
};

export default DesktopHeader;
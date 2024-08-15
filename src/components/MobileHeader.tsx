// MobileHeader.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, googleProvider } from '../services/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { 
  MobileHeaderWrapper, 
  LogoWrapper, 
  HamburgerButton, 
  MobileMenu, 
  MobileNavLink, 
  LanguageButton,
  LanguageSection,
  NavSection,
  Divider,
  AuthButton
} from '../styles/MobileHeaderStyles';
import { useNavigate } from 'react-router-dom';

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [user] = useAuthState(auth);
  const currentLang = i18n.language as 'en' | 'zh';
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isAdmin = user?.email === process.env.REACT_APP_ADMIN_EMAIL;

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsMenuOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <MobileHeaderWrapper>
      <LogoWrapper>
        <img src="/logo.svg" alt="Logo" />
      </LogoWrapper>
      <HamburgerButton onClick={toggleMenu}>
        ☰
      </HamburgerButton>
      {isMenuOpen && (
        <MobileMenu>
          <NavSection>
            <MobileNavLink to="/" onClick={toggleMenu}>{t('header.home')}</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={toggleMenu}>{t('header.gallery')}</MobileNavLink>
            {/* {user && <MobileNavLink to="/favorites" onClick={toggleMenu}>{t('header.favorites')}</MobileNavLink>} */}
            {user && <MobileNavLink to="/add-idea" onClick={toggleMenu}>{t('header.addIdea')}</MobileNavLink>}
            {user && <MobileNavLink to="/upload-creation" onClick={toggleMenu}>{t('header.uploadCreation')}</MobileNavLink>}
            {isAdmin && (
              <MobileNavLink to="/admin" onClick={toggleMenu}>{t('header.admin')}</MobileNavLink>
            )}
          </NavSection>
          <Divider />
          <LanguageSection>
            <LanguageButton 
              onClick={() => changeLanguage('en')} 
              isActive={currentLang === 'en'}
            >
              English
            </LanguageButton>
            <LanguageButton 
              onClick={() => changeLanguage('zh')} 
              isActive={currentLang === 'zh'}
            >
              中文
            </LanguageButton>
          </LanguageSection>
          <Divider />
          <AuthButton onClick={user ? handleLogout : handleLogin}>
            {user ? t('header.logout') : t('header.login')}
          </AuthButton>
        </MobileMenu>
      )}
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
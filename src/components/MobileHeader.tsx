import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  MobileHeaderWrapper, 
  LogoWrapper, 
  HamburgerButton, 
  MobileMenu, 
  MobileNavLink, 
  LanguageButton,
  LanguageSection,
  NavSection,
  Divider
} from '../styles/MobileHeaderStyles';

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'zh';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
        </MobileMenu>
      )}
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
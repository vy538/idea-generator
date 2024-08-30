// DesktopHeader.tsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "../services/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import {
  HeaderWrapper,
  Nav,
  LanguageButton,
  LanguageSelector,
  LogoWrapper,
  AuthButton,
} from "../styles/HeaderStyles";
import { NavBarLink } from "../styles/Typography";
import { useNavigate } from "react-router-dom";

const DesktopHeader: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [user] = useAuthState(auth);
  const currentLang = i18n.language as "en" | "zh";
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isAdmin = user?.email === process.env.REACT_APP_ADMIN_EMAIL;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <HeaderWrapper lang={currentLang} isScrolled={isScrolled}>
      <Nav>
        <NavBarLink to="/" lang={currentLang}>
          {t("header.home")}
        </NavBarLink>
        <NavBarLink to="/gallery" lang={currentLang}>
          {t("header.gallery")}
        </NavBarLink>
        {user && (
          <NavBarLink to="/favorites" lang={currentLang}>
            {t("header.favorites")}
          </NavBarLink>
        )}
        {user && (
          <NavBarLink to="/add-idea" lang={currentLang}>
            {t("header.addIdea")}
          </NavBarLink>
        )}
        {user && (
          <NavBarLink to="/upload-creation" lang={currentLang}>
            {t("header.uploadCreation")}
          </NavBarLink>
        )}
        {isAdmin && (
          <NavBarLink to="/admin" lang={currentLang}>
            {t("header.admin")}
          </NavBarLink>
        )}
      </Nav>
      <LogoWrapper>
        <img src="/logo.svg" alt="Logo" />
      </LogoWrapper>
      <LanguageSelector>
        <LanguageButton lang={currentLang} onClick={() => changeLanguage("en")}>
          English
        </LanguageButton>
        <LanguageButton lang={currentLang} onClick={() => changeLanguage("zh")}>
          中文
        </LanguageButton>
        {user ? (
          <AuthButton onClick={handleLogout}>{t("header.logout")}</AuthButton>
        ) : (
          <AuthButton onClick={handleLogin}>{t("header.login")}</AuthButton>
        )}
      </LanguageSelector>
    </HeaderWrapper>
  );
};

export default DesktopHeader;

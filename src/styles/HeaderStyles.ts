import styled from 'styled-components';
import { NavBarLink, SecondaryNavBarLink } from './Typography';

export const HeaderWrapper = styled.header<{ lang: 'en' | 'zh'; isScrolled: boolean }>`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-family: ${({ theme, lang }) => {
    if (!theme || !theme.fonts || !theme.fonts[lang]) {
      console.error('Theme or fonts not available in HeaderWrapper');
      return 'Arial, sans-serif'; // Fallback
    }
    return theme.fonts[lang].family;
  }};
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${({ theme, isScrolled }) =>
    isScrolled ? theme.colors.background : 'transparent'};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  flex: 1;
`;

export const NavLink = styled(NavBarLink)`
  // You can add any additional styles specific to the header here
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
  justify-content: flex-end;
`;

export const LanguageButton = styled(SecondaryNavBarLink)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px 4px;
  border-radius: 4px;
  color: ${({ theme }) =>theme.colors.primaryText};

  &:hover {
    color: ${({ theme }) =>theme.colors.primaryText};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) =>theme.colors.primaryText};
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 80px;
    height: 40px;
  }
`;

export const AuthButton = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primaryAccent};
  border-radius: 20px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: ${({ theme }) => theme.fonts.en.weights.medium};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
    color: ${({ theme }) => theme.colors.background};
  }
`;
import styled from 'styled-components';
import { NavBarLink, SecondaryNavBarLink } from './Typography';

export const HeaderWrapper = styled.header<{ lang: 'en' | 'zh' }>`
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
  
    console.log('HeaderWrapper render. Theme:', theme, 'Lang:', lang);
  if (!theme || !theme.fonts || !theme.fonts[lang]) {
      console.error('Theme or fonts not available in HeaderWrapper');
      return 'Arial, sans-serif'; // Fallback
    }
    return theme.fonts[lang].family;
  }};
  z-index: 1000;
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
import styled from 'styled-components';
import { theme } from './theme';
import { NavBarLink, SecondaryNavBarLink } from './Typography';

export const HeaderWrapper = styled.header<{ lang: 'en' | 'zh' }>`
  height: 60px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-family: ${props => theme.fonts[props.lang].family};
  z-index: 1000;
  // backdrop-filter: blur(5px);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(NavBarLink)`
  // You can add any additional styles specific to the header here
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: 16px;
`;

export const LanguageButton = styled(SecondaryNavBarLink)`
  // You can add any additional styles specific to the language buttons here
`;
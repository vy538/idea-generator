import styled from 'styled-components';
import { theme } from './theme';
import { NavBarLink, SecondaryNavBarLink } from './Typography';

export const HeaderWrapper = styled.header<{ lang: 'en' | 'zh' }>`
  height: 60px;
  width: 100wh;
  background-color: ${theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-family: ${props => theme.fonts[props.lang].family};
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
import styled from 'styled-components';
import { theme } from './theme';

export const HeaderWrapper = styled.header`
  height: 60px;
  width: 100wh;
  background-color: ${theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-family: ${theme.fonts.primary};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary};
  font-weight: 500;
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: 16px;
`;

export const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  padding: 0px;
  color: ${theme.colors.primary};
`;
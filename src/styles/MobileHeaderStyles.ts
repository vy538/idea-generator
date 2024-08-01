import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MobileHeaderWrapper = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
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

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background}DF;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LanguageSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.secondaryText};
  margin: 10px 0;
`;

export const MobileNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 12px 0;
  font-size: ${({ theme }) => theme.typography.body.mobileFontSize};
  font-weight: ${({ theme }) => theme.fonts.en.weights.medium};

  &:hover, &.active {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

export const LanguageButton = styled.button<{ isActive: boolean }>`
  background: none;
  border: 2px solid ${({ theme, isActive }) => isActive ? theme.colors.primaryAccent : 'transparent'};
  border-radius: 20px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.typography.body.mobileFontSize};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: ${({ theme }) => theme.fonts.en.weights.medium};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;
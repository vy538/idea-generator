import styled from 'styled-components';
import { theme } from './theme';

export const StyledButton = styled.button`
  background-color: ${theme.colors.button};
  border: none;
  color: ${theme.colors.primary};
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;
  font-family: ${theme.fonts.primary};

  &:hover {
    background-color: ${theme.colors.buttonHover};
  }
`;
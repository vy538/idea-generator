import styled from 'styled-components';
import { theme } from './theme';

export const StyledButton = styled.button<{ lang: 'en' | 'zh' }>`
  background-color: ${theme.colors.secondaryAccent};
  border: none;
  color: ${theme.colors.primaryText};
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 84px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;
  font-family: ${props => theme.fonts[props.lang].family};

  &:hover {
    background-color: ${theme.colors.buttonHover};
  }
`;
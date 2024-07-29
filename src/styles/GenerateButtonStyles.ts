import styled from 'styled-components';
import { theme } from './theme';

export const StyledButton = styled.button<{ lang: 'en' | 'zh' }>`
  background-color: ${theme.colors.background};
  border: none;
  color: ${theme.colors.primaryText};
  padding: 32px 72px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 84px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 150px;
  border-style: solid;
  border-width: 8px;
  border-color: ${theme.colors.primaryText};
  box-shadow: 10px 10px ${theme.colors.primaryText};
  transition: background-color 0.3s ease;
  font-family: ${props => theme.fonts[props.lang].family};

  &:hover {
    background-color: ${theme.colors.buttonHover};
    transform: translate(10px,10px);
    box-shadow: 0px 0px ${theme.colors.primaryText};
  }
`;
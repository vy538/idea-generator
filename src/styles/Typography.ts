import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { theme } from './theme';

interface TypographyProps {
  lang: 'en' | 'zh';
}
export const H1 = styled.h1<TypographyProps>`
  font-family: ${props => theme.fonts[props.lang].family};
  font-weight: ${props => theme.fonts[props.lang].weights.semiBold};
  font-size: ${theme.typography.h1.fontSize};
  line-height: ${theme.typography.h1.lineHeight};
`;

export const H2 = styled.h2<TypographyProps>`
  font-family: ${props => theme.fonts[props.lang].family};
  font-weight: ${props => theme.fonts[props.lang].weights.semiBold};
  font-size: ${theme.typography.h2.fontSize};
  line-height: ${theme.typography.h2.lineHeight};
`;

export const H3 = styled.h3<TypographyProps>`
  font-family: ${props => theme.fonts[props.lang].family};
  font-weight: ${props => theme.fonts[props.lang].weights.bold};
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
`;

export const Body = styled.p<TypographyProps>`
  font-family: ${props => theme.fonts[props.lang].family};
  font-weight: ${props => theme.fonts[props.lang].weights.regular};
  font-size: ${theme.typography.body.fontSize};
  line-height: ${theme.typography.body.lineHeight};
`;

export const NavBarLink = styled(RouterNavLink)<TypographyProps>`
  font-family: ${props => theme.fonts[props.lang].family};
  font-weight: ${props => theme.fonts[props.lang].weights.medium};
  font-size: ${theme.typography.body.fontSize};
  line-height: ${theme.typography.body.lineHeight};
  text-decoration: none;
  color: ${theme.colors.primaryText};
  padding: 0px 4px;
  border-radius: 4px;

  &.active {
    background-color: ${theme.colors.primaryAccent};
  }

  &:hover {
    background-color: ${theme.colors.secondaryAccent};
  }
`;

export const SecondaryNavBarLink = styled.button<TypographyProps>`
  font-family: ${props => theme.fonts[props.lang].family};
  font-weight: ${props => theme.fonts[props.lang].weights.regular};
  font-size: ${theme.typography.body.fontSize};
  line-height: ${theme.typography.body.lineHeight};
`;
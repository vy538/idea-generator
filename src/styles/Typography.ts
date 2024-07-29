import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export const NavBarLink = styled(Link)<TypographyProps>`
  font-family: ${props => theme.fonts[props.lang].family};
  font-weight: ${props => theme.fonts[props.lang].weights.bold};
  font-size: ${theme.typography.body.fontSize};
  line-height: ${theme.typography.body.lineHeight};
  text-decoration: none;
  color: ${theme.colors.primaryText};

  &:hover {
    color: ${theme.colors.primaryAccent};
  }

  &:active {
    color: ${theme.colors.secondaryText};
  }

  &.active {
    font-weight: ${props => theme.fonts[props.lang].weights.bold};
    color: ${theme.colors.primaryAccent};
  }
`;

export const SecondaryNavBarLink = styled.button<TypographyProps>`
  font-family: ${props => theme.fonts[props.lang].family};
  font-weight: ${props => theme.fonts[props.lang].weights.regular};
  font-size: ${theme.typography.body.fontSize};
  line-height: ${theme.typography.body.lineHeight};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${theme.colors.primaryText};

  &:hover {
    color: ${theme.colors.primaryAccent};
  }

  &:active {
    color: ${theme.colors.secondaryText};
  }
`;
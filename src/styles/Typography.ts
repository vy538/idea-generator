import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface TypographyProps {
  lang: 'en' | 'zh';
}
export const H1 = styled.h1<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.semiBold};
  font-size: 2.5rem;
  line-height: 1.2;
`;

export const H2 = styled.h2<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.semiBold};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
`;

export const H3 = styled.h3<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.bold};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
`;

export const Body = styled.p<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.regular};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
`;

export const NavBarLink = styled(RouterNavLink)<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.medium};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 0px 4px;
  border-radius: 4px;

  &.active {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

export const SecondaryNavBarLink = styled.button<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.regular};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
`;
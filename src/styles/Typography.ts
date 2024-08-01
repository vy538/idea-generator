import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface TypographyProps {
  lang: 'en' | 'zh';
}

const responsiveFontSize = (desktopSize: string, mobileSize: string) => `
  font-size: ${desktopSize};
  @media (max-width: 768px) {
    font-size: ${mobileSize};
  }
`;

export const H1 = styled.h1<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.semiBold};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  ${({ theme }) => responsiveFontSize(theme.typography.h1.fontSize, theme.typography.h1.mobileFontSize)}
`;

export const H2 = styled.h2<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.semiBold};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  ${({ theme }) => responsiveFontSize(theme.typography.h2.fontSize, theme.typography.h2.mobileFontSize)}
`;

export const H3 = styled.h3<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.bold};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  ${({ theme }) => responsiveFontSize(theme.typography.h3.fontSize, theme.typography.h3.mobileFontSize)}
`;

export const Body = styled.p<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.regular};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  ${({ theme }) => responsiveFontSize(theme.typography.body.fontSize, theme.typography.body.mobileFontSize)}
`;

export const NavBarLink = styled(RouterNavLink)<TypographyProps>`
  font-family: ${({ theme, lang }) => theme.fonts[lang].family};
  font-weight: ${({ theme, lang }) => theme.fonts[lang].weights.medium};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  ${({ theme }) => responsiveFontSize(theme.typography.body.fontSize, theme.typography.body.mobileFontSize)}
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
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  ${({ theme }) => responsiveFontSize(theme.typography.body.fontSize, theme.typography.body.mobileFontSize)}
`;
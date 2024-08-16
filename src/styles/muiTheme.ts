// src/styles/muiTheme.ts

import { createTheme } from '@mui/material/styles';
import { theme as styledTheme } from './theme';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: styledTheme.colors.darkPrimaryAccent,
    },
    secondary: {
      main: styledTheme.colors.errorColor,
    },
    text: {
      primary: styledTheme.colors.primaryText,
      secondary: styledTheme.colors.secondaryText,
    },
    background: {
      default: styledTheme.colors.background,
      paper: styledTheme.colors.background,
    },
  },
  typography: {
    fontFamily: styledTheme.fonts.en.family,
    h1: {
      fontSize: styledTheme.typography.h1.fontSize,
      fontWeight: styledTheme.fonts.en.weights.semiBold,
    },
    h2: {
      fontSize: styledTheme.typography.h2.fontSize,
      fontWeight: styledTheme.fonts.en.weights.semiBold,
    },
    h3: {
      fontSize: styledTheme.typography.h3.fontSize,
      fontWeight: styledTheme.fonts.en.weights.bold,
    },
    body1: {
      fontSize: styledTheme.typography.body.fontSize,
      fontWeight: styledTheme.fonts.en.weights.regular,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});
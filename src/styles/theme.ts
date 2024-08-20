export const theme = {
  colors: {
    background: '#FFFDF6',
    primaryText: '#494949',
    secondaryText: '#666666',
    primaryAccent: '#ECE8D9',
    secondaryAccent: '#FAF6E9',
    darkPrimaryAccent: '#8A7D66',
    darkSecondaryAccent: '#6A6358',
    buttonHover: '#ECE8D9',
    errorColor: '#ffb2ba',
  },
  fonts: {
    en: {
      family: "'Montserrat', Arial, sans-serif",
      weights: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 600,
        semiBold: 700,
      },
    },
    zh: {
      family: "'Noto Sans TC', Arial, sans-serif",
      weights: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 600,
        semiBold: 700,
      },
    }
  },
  typography: {
    h1: {
      fontSize: '3rem !important',
      mobileFontSize: '1.75rem !important',
      lineHeight: 1,
    },
    h2: {
      fontSize: '2.5rem !important',
      mobileFontSize: '1.5rem !important',
      lineHeight: 1,
    },
    h3: {
      fontSize: '2rem !important',
      mobileFontSize: '1rem !important',
      lineHeight: 1,
    },
    body: {
      fontSize: '1rem !important',
      mobileFontSize: '0.875rem !important',
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1366px',
  },
};
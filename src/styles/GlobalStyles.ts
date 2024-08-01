import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  #root {
    height: 100%;
    width: 100%;
  }

    @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
`;
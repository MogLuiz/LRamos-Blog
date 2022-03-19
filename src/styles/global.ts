// Packages
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/poppins-v19-latin-300.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/poppins-v19-latin-regular.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/poppins-v19-latin-600.woff2') format('woff2'),
  }

  * {
      margin: 0;
      padding: 0;
      border: none;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    ${({ theme }) => css`
      body {
        background: ${theme.colors.bgPrimary};
      }

      body,
      input,
      textarea,
      select,
      button {
        /* font-family: $default */
      }

      button a {
        cursor: pointer;
      }

      a {
        text-decoration: none;
        color: ${theme.colors.textSecondary};
      }

      body {
        font-family: ${theme.font.family};
      }
    `}
`;

export default GlobalStyles;

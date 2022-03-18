// Packages
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
      * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
      }

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
    `}
`;

export default GlobalStyles;

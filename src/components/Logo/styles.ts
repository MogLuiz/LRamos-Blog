// Packages
import styled, { css } from "styled-components";

export const UlContainer = styled.ul`
  ${({ theme }) => css`
    position: relative;

    display: flex;

    li {
      position: relative;
      list-style: none;
    }
    a {
      position: relative;
      font-size: 2.5em;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke: 1px rgba(169, 173, 193, 1);
    }
    a::before {
      content: attr(data-text);
      position: absolute;
      color: $textPrimary;
      width: 0;
      overflow: hidden;
      transition: 1s;

      border-right: 8px solid ${theme.colors.textPrimary};
    }

    a:hover::before {
      width: 100%;
      -webkit-text-stroke: 1px #fff;
    }
  `}
`;

// Packages
import styled, { css, DefaultTheme } from "styled-components";

// Types
import { TNavItemStyledComponent } from "./types";

const navItemModifier = {
  isActive: (theme: DefaultTheme) => css`
    color: ${theme.colors.textPrimary};
    font-weight: bold;
    &::after {
      content: "";

      height: 3px;
      width: 100%;

      border-radius: 3px 3px 0 0;

      position: absolute;

      bottom: 0;
      left: 0;

      background: ${theme.colors.textPrimary};
    }
  `,
};

export const HeaderContainer = styled.header`
  height: 5rem;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 5rem;

  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  label {
    margin-left: auto;
  }
`;

export const HeaderLogo = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
  `}
`;

export const NavItems = styled.nav`
  margin-left: 5rem;

  height: 5rem;
`;

export const NavItem = styled.a<TNavItemStyledComponent>`
  ${({ theme, isActive }) => css`
    display: inline-block;

    position: relative;

    padding: 0 0.5rem;
    margin-left: 3rem;

    height: 5rem;
    line-height: 5rem;

    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.textPrimary};
    }

    ${isActive && navItemModifier.isActive(theme)}
  `}
`;

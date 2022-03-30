// Packages
import styled, { css } from "styled-components"

export const Label = styled.label`
  ${({ theme }) => css`
    position: relative;

    width: 100px;
    height: 50px;

    background: ${theme.colors.bgSecondary};
    border-radius: 10px;
  `}
`

export const Input = styled.input`
  appearance: none;

  &:checked ~ span {
    left: 50px;
  }

  &:checked ~ span svg {
    color: rgba(255, 255, 255, 1);
    filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff)
      drop-shadow(0 0 15px #fff);
  }
`

export const Span = styled.span`
  ${({ theme }) => css`
    position: absolute;

    top: 0;
    left: 0;

    width: 50px;
    height: 50px;

    background: ${theme.colors.bgPrimary};

    border: 6px solid ${theme.colors.bgSecondary};
    border-radius: 14px;

    cursor: pointer;

    transition: 0.5s;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: rgba(255, 255, 255, 0.25);
      font-size: 1.3em;
      transition: 0.5s;
    }
  `}
`

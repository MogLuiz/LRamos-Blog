// Packages
import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  max-height: 330px;

  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
`;

export const ImagePost = styled.img`
  ${({ theme }) => css`
    width: 55%;
    height: 100%;

    border-radius: ${theme.border.defaultRadius};
  `}
`;

export const ContentWrapper = styled.div`
  margin-left: 30px;
  position: relative;
`;

export const TitlePost = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};

    line-height: 45px;
  `}
`;

export const SubtitlePost = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textSecondary};

    margin-top: 15px;
    line-height: 25px;
  `}
`;

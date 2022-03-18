// Packages
import styled from "styled-components";

export const WrapperAuthorSession = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  bottom: 0;
  left: 0;
`;

export const ImageAuthor = styled.img`
  width: 50px;

  border-radius: ${(props) => props.theme.border.defaultRadius};
`;

export const AuthorInfo = styled.div`
  margin-left: 15px;
`;

export const AuthorName = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const PostDate = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  margin-top: 5px;
`;

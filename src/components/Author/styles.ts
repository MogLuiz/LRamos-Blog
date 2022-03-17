
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

  border-radius: $defaultImageRadius;
`;

export const AuthorInfo = styled.div`
  margin-left: 15px;
`;

export const AuthorName = styled.p`
  font-weight: bold;
  color: $textPrimary;
`;

export const PostDate = styled.p`
  color: $textSecondary;
  margin-top: 5px;
`;

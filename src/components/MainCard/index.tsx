import React from "react";
import Image from "next/image";

import {
  Container,
  ImagePost,
  ContentWrapper,
  TitlePost,
  SubtitlePost,
  ImageAuthor,
  WrapperAuthorSession,
  AuthorInfo,
  AuthorName,
  PostDate,
} from "./styles";

const MainCard: React.FC = () => {
  return (
    <Container>
      <ImagePost src="/imgProject.jpg" />
      <ContentWrapper>
        <button>The newest</button>
        <TitlePost>
          Como utilizar a biblioteca de css in js Stitches? É uma boa ferramenta
          para mercado?
        </TitlePost>
        <SubtitlePost>
          É extremamente válido o aprendizado da biblioteca Stitches no que
          tange css in js, ela tras consigo vários beneficios e facilidades.
        </SubtitlePost>
        <WrapperAuthorSession>
          <ImageAuthor src="https://avatars.githubusercontent.com/u/58401291?v=4" />
          <AuthorInfo>
            <AuthorName>Luiz Henrique</AuthorName>
            <PostDate>24/02/2022</PostDate>
          </AuthorInfo>
        </WrapperAuthorSession>
      </ContentWrapper>
    </Container>
  );
};

export default MainCard;

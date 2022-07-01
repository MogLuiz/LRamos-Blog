// Packages
import React from "react"

// Components
import Author from "../Author"

// Styles
import {
  Container,
  ImagePost,
  ContentWrapper,
  TitlePost,
  SubtitlePost
} from "./styles"

const MainCard: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container aria-label="Main Post Card">
      <ImagePost src="/imageBlog.png" />
      <ContentWrapper>
        {/* <button>The newest</button> */}
        <TitlePost>
          Como utilizar a biblioteca de css in js Stitches? É uma boa ferramenta
          para mercado?
        </TitlePost>
        <SubtitlePost>
          É extremamente válido o aprendizado da biblioteca Stitches no que
          tange css in js, ela tras consigo vários beneficios e facilidades.
        </SubtitlePost>
        <Author />
      </ContentWrapper>
    </Container>
  )
}

export default MainCard

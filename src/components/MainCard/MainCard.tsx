// Packages
import React from "react"

// Components
import { Author } from "../Author"

// Styles
import * as S from "./styles"

const MainCard = () => (
  <S.Container aria-label="Main Post Card">
    <S.ImagePost src="/imageBlog.png" />
    <S.ContentWrapper>
      {/* <button>The newest</button> */}
      <S.TitlePost>
        Como utilizar a biblioteca de css in js Stitches? É uma boa ferramenta
        para mercado?
      </S.TitlePost>
      <S.SubtitlePost>
        É extremamente válido o aprendizado da biblioteca Stitches no que tange
        css in js, ela tras consigo vários beneficios e facilidades.
      </S.SubtitlePost>
      <Author />
    </S.ContentWrapper>
  </S.Container>
)

export default MainCard

// Packages
import React from "react"

// Styles
import * as S from "./styles"

interface ILogo {
  name: string
}

const Logo = ({ name }: ILogo) => (
  <S.UlContainer>
    <li>
      <a data-text="&nbsp;L.Ramos">&nbsp;{name}</a>
    </li>
  </S.UlContainer>
)

export default Logo

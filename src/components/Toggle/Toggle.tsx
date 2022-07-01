// Packages
import React from "react"

// Assets
import { TiLightbulb } from "react-icons/ti"

// Styles
import * as S from "./styles"

const Toggle = () => (
  <S.Label aria-label="Theme Toggle">
    <S.Input type="checkbox" onChange={(value) => console.log(value)} />
    <S.Span>
      <TiLightbulb />
    </S.Span>
  </S.Label>
)

export default Toggle

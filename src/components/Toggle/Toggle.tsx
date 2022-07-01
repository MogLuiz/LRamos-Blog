// Packages
import React from "react"

// Assets
import { TiLightbulb } from "react-icons/ti"

// Styles
import { Label, Span, Input } from "./styles"

const Toggle = () => (
  <Label aria-label="Theme Toggle">
    <Input type="checkbox" onChange={(value) => console.log(value)} />
    <Span>
      <TiLightbulb />
    </Span>
  </Label>
)

export default Toggle

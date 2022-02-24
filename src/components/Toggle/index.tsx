// Packages
import React from "react";

// Stitches Components Style
import { Label, Span, Input } from "./styles"

const Toggle: React.FC = () => {
  return (
      <>
        <Label >
            <Input type="checkbox" />
            <Span></Span>
        </Label>
      </>
  )
};

export default Toggle;

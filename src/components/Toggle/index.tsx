// Packages
import React from "react";

// Assets
import { TiLightbulb } from "react-icons/ti";

// Stitches Components Style
import { Label, Span, Input } from "./styles";

const Toggle: React.FC = () => {
  return (
    <>
      <Label>
        <Input type="checkbox" onChange={(value) => console.log(value)} />
        <Span>
          <TiLightbulb />
        </Span>
      </Label>
    </>
  );
};

export default Toggle;

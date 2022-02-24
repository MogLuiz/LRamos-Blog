// Packages
import React from "react";

// Assets
import { TiLightbulb } from "react-icons/ti";

// Stitches Components Style
import { Label, Span, Input } from "./styles";

interface IToggleProps {
  darkMode: boolean | ((value: boolean | ((val: boolean) => boolean)) => void);
  setDarkMode:
    | boolean
    | ((value: boolean | ((val: boolean) => boolean)) => void);
}

const Toggle: React.FC<IToggleProps> = ({ darkMode, setDarkMode }) => {
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

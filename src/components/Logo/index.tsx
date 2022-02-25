// Packages
import React from "react";

// Styles
import { UlContainer } from "./styles";

interface ILogo {
  name: string;
}

const Logo: React.FC<ILogo> = ({ name }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <UlContainer>
      <li>
        <a data-text="&nbsp;L.Ramos">&nbsp;{name}</a>
      </li>
    </UlContainer>
  );
};

export default Logo;

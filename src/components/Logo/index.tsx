// Packages
import React from "react";

import { UlContainer } from "./styles";

interface ILogo {
  name: string;
}

const Logo: React.FC<ILogo> = ({ name }) => {
  const names = name;
  return (
    <>
      <UlContainer>
        <li>
          <a data-text="&nbsp;L.Ramos">&nbsp;{name}</a>
        </li>
      </UlContainer>
    </>
  );
};

export default Logo;

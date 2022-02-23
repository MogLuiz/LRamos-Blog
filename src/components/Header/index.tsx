// Packages
import React from "react";

import { HeaderContainer, HeaderContent } from "./styles"

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>L.Ramos</h1>
        <nav>
          <a>Blog</a>
          <a>Contact</a>
          <a>About</a>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

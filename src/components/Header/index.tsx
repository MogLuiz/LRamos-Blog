// Packages
import React from "react";

// Components
import Toggle from "../Toggle";

// Stitches Components Style
import {
  HeaderContainer,
  HeaderContent,
  NavItems,
  NavItem,
  HeaderLogo,
} from "./styles";

const Header: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>L.Ramos</HeaderLogo>
        <NavItems>
          <NavItem isActive={true}>Blog</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>About</NavItem>
        </NavItems>
        <Toggle />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
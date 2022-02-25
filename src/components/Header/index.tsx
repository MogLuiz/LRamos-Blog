// Packages
import React from "react";
import Link from "next/link";

// Components
import { Toggle } from "..";

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
          <Link href="/about" passHref>
            <NavItem>About</NavItem>
          </Link>
          <Link href="/blog" passHref>
            <NavItem isActive={true}>Blog</NavItem>
          </Link>
          <Link href="/contact" passHref>
            <NavItem>Contact</NavItem>
          </Link>
        </NavItems>
        <Toggle />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

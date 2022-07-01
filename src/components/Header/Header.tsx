// Packages
import React from "react"

// Components
import { Toggle } from "../Toggle"
import { ActiveLink } from "../ActiveLink"

// Stitches Components Style
import {
  HeaderContainer,
  HeaderContent,
  NavItems,
  NavItem,
  HeaderLogo
} from "./styles"

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <HeaderLogo>L.Ramos</HeaderLogo>
      <NavItems>
        <ActiveLink href="/about" passHref>
          <NavItem>About</NavItem>
        </ActiveLink>
        <ActiveLink href="/blog" passHref>
          <NavItem>Blog</NavItem>
        </ActiveLink>
        <ActiveLink href="/contact" passHref>
          <NavItem>Contact</NavItem>
        </ActiveLink>
      </NavItems>
      <Toggle />
    </HeaderContent>
  </HeaderContainer>
)

export default Header

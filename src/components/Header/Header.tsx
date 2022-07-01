// Packages
import React from "react"

// Components
import { Toggle } from "../Toggle"
import { ActiveLink } from "../ActiveLink"

// Styles
import * as S from "./styles"

const Header = () => (
  <S.HeaderContainer>
    <S.HeaderContent>
      <S.HeaderLogo>L.Ramos</S.HeaderLogo>
      <S.NavItems>
        <ActiveLink href="/about" passHref>
          <S.NavItem>About</S.NavItem>
        </ActiveLink>
        <ActiveLink href="/blog" passHref>
          <S.NavItem>Blog</S.NavItem>
        </ActiveLink>
        <ActiveLink href="/contact" passHref>
          <S.NavItem>Contact</S.NavItem>
        </ActiveLink>
      </S.NavItems>
      <Toggle />
    </S.HeaderContent>
  </S.HeaderContainer>
)

export default Header

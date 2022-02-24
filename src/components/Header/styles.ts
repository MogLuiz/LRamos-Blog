import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  height: "5rem",
});

export const HeaderContent = styled("div", {
  maxWidth: "1120px",
  height: "5rem",

  margin: "0 auto",
  padding: "0 2rem",

  display: "flex",
  alignItems: "center",
});

export const HeaderLogo = styled("h2", {
  color: "$textPrimary",
});

export const NavItems = styled("nav", {
  marginLeft: "5rem",

  height: "5rem",
});

export const NavItem = styled("a", {
  display: "inline-block",

  position: "relative",

  padding: "0 0.5rem",

  marginLeft: "3rem",

  height: "5rem",
  lineHeight: "5rem",

  transition: "color .3s",

  "&:hover": {
    color: "$textPrimary",
  },

  variants: {
    isActive: {
      true: {
        color: "$textPrimary",
        fontWeight: "bold",
        "&::after": {
          content: "",

          height: "3px",
          width: "100%",

          borderRadius: "3px 3px 0 0",

          position: "absolute",

          bottom: 15,
          left: "0",

          background: "$textPrimary",
        },
      },
    },
  },
});

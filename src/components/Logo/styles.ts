import { styled } from "../../styles";

export const UlContainer = styled("ul", {
  position: "relative",

  display: "flex",

  li: {
    position: "relative",
    listStyle: "none",
  },
  a: {
    position: "relative",
    fontSize: "2.5em",
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "transparent",
    "-webkit-text-stroke": "1px rgba(169, 173, 193, 1)",
  },
  "a::before": {
    content: "attr(data-text)",
    position: "absolute",
    color: "$textPrimary",
    width: "0",
    overflow: "hidden",
    transition: "1s",

    borderRight: "8px solid $textPrimary",
  },

  "a:hover::before": {
    width: "100%",
    "-webkit-text-stroke": "1px #fff",
  },
});

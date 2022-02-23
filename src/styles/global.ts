// Stitches Styles
import { globalCss } from "./index";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    border: "none",
    boxSizing: "border-box",
  },

  body: {
    background: "$bgPrimary",
  },

  "body, input, textarea, select, button": {
    fontFamily: "$default",
  },

  button: {
    cursor: "pointer",
  },

  a: {
    textDecoration: "none",
  },
});

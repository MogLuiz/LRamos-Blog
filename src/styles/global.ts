// Stitches Styles
import { globalCss } from "@stitches/react";

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
});

import { createStitches, ScaleValue } from "@stitches/react";

const isThemeDark = true;

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      bgPrimary: "#1f2028",
      bgSecondary: "#2e3039",
      textPrimary: "#fff",
      textSecondary: "#a9adc1",
    },
    fonts: {
      default: "Roboto",
    },
  },
});

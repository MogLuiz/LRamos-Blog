import { createStitches, ScaleValue } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      bgPrimary: "#1f2028",
      bgSecondary: "#2e3039",
      textPrimary: "#fff",
      textSecondary: "#a9adc1",
    },
    space: {
      "0": `0px`,
      "1": `1px`,
      "4": `0.25rem`,
      "8": `0.5rem`,
      "12": `0.75rem`,
      "16": `1rem`,
      "24": `1.5rem`,
      "32": `2rem`,
    },
    radii: {
      full: `99999px`,
      defaultRadius: `20px`,
    },
    fonts: {
      default: "Roboto",
    },
  },
  utils: {
    paddingX: (value: ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

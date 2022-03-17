import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    grid: {
      container: string;
      gutter: string;
    };
    border: {
      full: string;
      defaultRadius: string;
    };
    font: {
      family: string;
      light: number;
      normal: number;
      bold: number;
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
      };
    };
    colors: {
      bgPrimary: string;
      bgSecondary: string;
      textPrimary: string;
      textSecondary: string;
    };
    space: {
      "0": string;
      "1": string;
      "4": string;
      "8": string;
      "12": string;
      "16": string;
      "24": string;
      "32": string;
    };
    layers: {
      base: number;
      menu: number;
      overlay: number;
      modal: number;
      alwaysOnTop: number;
    };
  }
}

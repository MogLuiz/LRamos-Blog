export interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

export type ITheme = "dark" | "light";

// Packages
import React, { createContext, useState, useContext } from "react";

// Types
import { IThemeContext, ITheme } from "./types";

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem("@lramosblog:theme");

    if (themeSaved) {
      return JSON.parse(themeSaved);
    }

    return "dark";
  });
  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("@lramosblog:theme", JSON.stringify("light"));
    } else {
      setTheme("dark");
      localStorage.setItem("@lramosblog:theme", JSON.stringify("dark"));
    }
  };

  // -------------------------------------------------
  // Return
  // -------------------------------------------------

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };

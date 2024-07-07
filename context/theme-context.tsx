// theme-context.tsx
import { createContext, useState, ReactNode, useContext } from "react";

export type ThemeContextType = {
  toggleTheme: () => void;
  mode: string;
};

const initialThemeContext: ThemeContextType = {
  toggleTheme: () => {},
  mode: "light",
};

export const ThemeContext = createContext<ThemeContextType>(initialThemeContext);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

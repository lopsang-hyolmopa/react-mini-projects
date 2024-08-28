import { createContext, useContext, useEffect, useState } from "react";

import { ThemeContextType } from "../types";

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: "light",
  setDarkMode: () => {},
  setLightMode: () => {},
});

export const ThemeContextProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<string>("light");

  const setDarkMode = () => {
    setThemeMode("dark");
  };

  const setLightMode = () => {
    setThemeMode("light");
  };

  // actual change in theme logic
  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setDarkMode, setLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}

import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme || false);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.theme = isDarkMode ? "dark" : "light";
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

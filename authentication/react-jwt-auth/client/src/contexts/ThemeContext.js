import { createContext, useContext } from "react";

const ThemeContext = createContext();
export default ThemeContext;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.error("Theme context must be wrapped within a provider");
    return undefined;
  }
  return context;
};

import { createContext, useContext } from "react";

const ThemeContext = createContext(0);
export default ThemeContext;

export const useTheme = () => useContext(ThemeContext);

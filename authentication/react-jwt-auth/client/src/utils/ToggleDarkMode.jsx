import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../contexts/ThemeContext";

export default function ToggleDarkMode() {
  const { isDarkMode, handleToggle } = useTheme();

  return (
    <DarkModeSwitch
      className="h-7"
      checked={isDarkMode}
      onChange={handleToggle}
      size={120}
    />
  );
}

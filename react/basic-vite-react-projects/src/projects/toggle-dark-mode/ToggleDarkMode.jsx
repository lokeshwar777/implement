import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../../contexts/ThemeContext";

export default function ToggleDarkMode() {
    const { darkMode, setDarkMode } = useTheme();

    const handleToggle = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        // <button onClick={handleToggle}>{darkMode ? "dark" : "light"}</button>

        // external library
        <DarkModeSwitch
            className="h-7"
            checked={darkMode}
            onChange={handleToggle}
            size={120}
        />
    );
}

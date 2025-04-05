import React, { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ThemeContext from "../../contexts/ThemeContext";

export default function ToggleDarkMode() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

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

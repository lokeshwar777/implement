import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function Theme({ children }) {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeContext value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext>
    );
}

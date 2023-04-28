import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

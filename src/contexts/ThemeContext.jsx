import { useState, useContext, createContext, useCallback, useEffect } from 'react';

// Create a ThemeContext with default values for theme and toggle function
const ThemeContext = createContext({
    themeMode: "light",
    toggleTheme: () => { }
});

// ThemeProvider component to manage and provide the theme context
export const ThemeProvider = ({ children }) => {
    // Initialize themeMode from localStorage or default to "dark" if no saved theme is found
    const [themeMode, setThemeMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "dark"
    });

    // Function to toggle between "light" and "dark" themes
    const toggleTheme = useCallback(() => {
        setThemeMode(prevTheme => prevTheme === "light" ? "dark" : "light");
    }, []);

    // Update the document's root element class and localStorage whenever themeMode changes
    useEffect(() => {
        document.querySelector('html').className = themeMode;
        localStorage.setItem("theme", themeMode)
    }, [themeMode]);

    // Provide theme-related data and functions to children components
    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook to use the ThemeContext in components
export const useTheme = () => useContext(ThemeContext);
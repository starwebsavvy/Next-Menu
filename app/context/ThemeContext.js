// context/ThemeContext.js
"use client";
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isLightTheme, setIsLightTheme] = useState(true);

	const toggleTheme = () => {
		setIsLightTheme((prevTheme) => !prevTheme);
	};

	return (
		<ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);

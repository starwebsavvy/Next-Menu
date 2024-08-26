"use client";

import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./globals.css"; // Import global styles
import { Inter } from "next/font/google";

// Configure the Inter font
const inter = Inter({ subsets: ["latin"] });

const BodyClassUpdater = ({ children }) => {
	const { isLightTheme } = useTheme();

	useEffect(() => {
		document.body.className = isLightTheme ? "light-theme" : "dark-theme";
	}, [isLightTheme]);

	return <>{children}</>;
};

export default function Layout({ children }) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<ThemeProvider>
					<BodyClassUpdater>{children}</BodyClassUpdater>
				</ThemeProvider>
			</body>
		</html>
	);
}

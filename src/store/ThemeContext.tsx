import React, { createContext, useContext, useState } from "react";
// types

type Theme = "light" | "dark";

type TProviderValues = {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
	toggleTheme(): void;
};

type TThemeProvider = {
	children: React.ReactNode;
};

const themeContext = createContext<TProviderValues | null>(null);

export const ThemeContextProvider = ({ children }: TThemeProvider): React.ReactNode => {
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = (): void => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	const providerValues: TProviderValues = {
		toggleTheme,
		theme,
		setTheme,
	};
	return <themeContext.Provider value={{ ...providerValues }}>{children}</themeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
	if (!themeContext) {
		throw new Error("useThemeContext must be used within a ThemeContextProvider");
	}
	return useContext(themeContext);
};

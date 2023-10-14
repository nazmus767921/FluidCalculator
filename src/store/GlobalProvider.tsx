import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import { useThemeContext } from "./ThemeContext";
interface IProvider {
	children: React.ReactNode;
}
export const GlobalProvider = ({ children }: IProvider): React.ReactNode => {
	const { theme } = useThemeContext() ?? { theme: "light" };

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>{children}</ThemeProvider>
	);
};

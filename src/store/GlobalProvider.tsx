import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import { ThemeContextProvider, useThemeContext } from "./ThemeContext";
import { store } from "./store";
import { Provider } from "react-redux";
interface IProvider {
  children: React.ReactNode;
}
export const GlobalProvider = ({ children }: IProvider): React.ReactNode => {
  const { theme } = useThemeContext() ?? { theme: "light" };

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

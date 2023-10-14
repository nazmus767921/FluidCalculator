import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyleProvider } from "./global.styled.js";
import { ThemeContextProvider } from "./store/ThemeContext.tsx";
import { GlobalProvider } from "./store/GlobalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<GlobalProvider>
				<GlobalStyleProvider />
				<App />
			</GlobalProvider>
		</ThemeContextProvider>
	</React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyleProvider } from "./global.styled.js";
import { ThemeContextProvider } from "./store/ThemeContext.tsx";
import { GlobalProvider } from "./store/GlobalProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
				index: true,
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GlobalProvider>
        <GlobalStyleProvider />
        <RouterProvider router={router} />
      </GlobalProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

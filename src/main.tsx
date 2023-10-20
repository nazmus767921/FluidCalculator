import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyleProvider } from "./global.styled.js";
import { GlobalProvider } from "./store/GlobalProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.tsx";
import {
  documentation_route,
  home_route,
  additional_features,
} from "./pages/pages.routes.ts";
import DocumentationPage from "./pages/Documentation";
import AdditionalFeaturesPage from "./pages/AdditionalFeatures";
import { firebaseConfig } from "../firebase.config.ts";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

const router = createBrowserRouter([
  {
    path: home_route,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: documentation_route, element: <DocumentationPage /> },
      { path: additional_features, element: <AdditionalFeaturesPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyleProvider />
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);

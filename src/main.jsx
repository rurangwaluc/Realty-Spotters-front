import "./styles/admin.css";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastProvider } from "./context/ToastContext";
import { Toaster } from "react-hot-toast";

// Create a router and opt-in to the v7_startTransition flag
const router = createBrowserRouter(
  [
    { path: "/*", element: <App /> },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ToastProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          toastOptions={{ duration: 4000 }}
        />
      </ToastProvider>
    </HelmetProvider>
  </React.StrictMode>
);

import "./styles/admin.css";
import './index.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastProvider } from "./context/ToastContext";
import { Toaster } from "react-hot-toast";

// Create a router and opt-in to the v7_startTransition flag
const router = createBrowserRouter(
  [
    { path: "/*", element: <App /> }, // Wrap your whole App in one route
  ],
  {
    future: {
      v7_startTransition: true, // ✅ This removes the warning
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{ duration: 4000 }}
      />
    </ToastProvider>
  </React.StrictMode>
);

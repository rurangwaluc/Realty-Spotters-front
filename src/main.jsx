import "./styles/admin.css";
import './index.css'; // Make sure this line is included at the top

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastProvider } from "./context/ToastContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastProvider>

      <App />
      </ToastProvider>

      <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
      }}
    />
    </BrowserRouter>
  </React.StrictMode>
);


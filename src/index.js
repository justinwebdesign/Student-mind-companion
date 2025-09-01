import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";   // <-- adjust to your actual CSS location
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
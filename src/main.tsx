import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const root = document.getElementById("root")!;

const application = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(application);

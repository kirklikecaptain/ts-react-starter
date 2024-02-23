import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/router";
import ThemeProvider from "./theme/ThemeProvider";

const root = document.getElementById("root")!;

const application = (
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(application);

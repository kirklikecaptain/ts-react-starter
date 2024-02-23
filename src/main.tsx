import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/router";

const root = document.getElementById("root")!;

const application = (
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(application);

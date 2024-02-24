import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "~/libs/chakra-ui/ThemeProvider";
import QueryProvider from "~/libs/react-query/QueryProvider";
import Router from "./main.router";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryProvider>
        <Router />
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>
);

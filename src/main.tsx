import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "~/libs/chakra-ui/ThemeProvider";
import QueryProvider from "~/libs/react-query/QueryProvider";
import Router from "~/router/router";

const root = document.getElementById("root")!;

const application = (
  <React.StrictMode>
    <ThemeProvider>
      <QueryProvider>
        <Router />
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(application);

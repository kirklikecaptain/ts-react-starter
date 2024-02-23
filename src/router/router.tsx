import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}

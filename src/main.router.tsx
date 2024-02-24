import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "~/routes/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

import { createBrowserRouter } from "react-router-dom";
import { Home } from "src/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

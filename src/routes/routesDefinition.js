import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Markets = lazy(() => import("pages/Markets/Markets"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Markets />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import PageOne from "../Pages/Home/PageOne";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <PageOne></PageOne>,
      },
    ],
  },
]);

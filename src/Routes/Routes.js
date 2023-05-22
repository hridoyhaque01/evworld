import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import PageOne from "../Pages/Home/PageOne";
import PageTwo from "../Pages/Home/PageTwo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <PageOne></PageOne>,
      },
      {
        path: "/pageTwo",
        element: <PageTwo></PageTwo>,
      },
    ],
  },
]);

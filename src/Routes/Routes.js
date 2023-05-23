import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import HomePageOne from "../Pages/HomePageOne/HomePageOne";
import HomePageTwo from "../Pages/HomePageTwo/HomePageTwo";
import HomePageThree from "../Pages/HomePageThree/HomePageThree";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePageOne></HomePageOne>,
      },
      {
        path: "/homePageTwo",
        element: <HomePageTwo></HomePageTwo>,
      },
      {
        path: "/homePageThree",
        element: <HomePageThree></HomePageThree>,
      },
    ],
  },
]);

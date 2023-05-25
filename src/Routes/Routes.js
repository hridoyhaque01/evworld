import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import HomePageFive from "../Pages/HomePageFive/HomePageFive";
import HomePageFour from "../Pages/HomePageFour/HomePageFour";
import HomePageOne from "../Pages/HomePageOne/HomePageOne";
import HomePageThree from "../Pages/HomePageThree/HomePageThree";
import HomePageTwo from "../Pages/HomePageTwo/HomePageTwo";

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
      {
        path: "/homePageFour",
        element: <HomePageFour></HomePageFour>,
      },
      {
        path: "/homePageFive",
        element: <HomePageFive></HomePageFive>,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Error from "../Pages/Error/Error";
import Gallery from "../Pages/Gallery/Gallery";
import GalleryImageDetails from "../Pages/Gallery/GalleryImageDetails";
import HomePageFive from "../Pages/HomePageFive/HomePageFive";
import HomePageFour from "../Pages/HomePageFour/HomePageFour";
import HomePageOne from "../Pages/HomePageOne/HomePageOne";
import HomePageThree from "../Pages/HomePageThree/HomePageThree";
import HomePageTwo from "../Pages/HomePageTwo/HomePageTwo";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import Shop from "../Pages/Shop/Shop";
import ShopDetails from "../Pages/Shop/ShopDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // home pages
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

      // single pages

      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },

      // services

      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServicesDetails></ServicesDetails>,
      },
      // Gallery

      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/gallery/:id",
        element: <GalleryImageDetails></GalleryImageDetails>,
      },

      // contact us
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },

      //shop
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/shop/:id",
        element: <ShopDetails></ShopDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

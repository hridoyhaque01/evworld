import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Error from "../Pages/Error/Error";
import Gallery from "../Pages/Gallery/Gallery";
import HomePageFive from "../Pages/HomePages/PageFive/HomePageFive";
import HomePageFour from "../Pages/HomePages/PageFour/HomePageFour";
import HomePageOne from "../Pages/HomePages/PageOne/HomePageOne";
import HomePageThree from "../Pages/HomePages/PageThree/HomePageThree";
import HomePageTwo from "../Pages/HomePages/PageTwo/HomePageTwo";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import Shop from "../Pages/Shop/Shop";
import ShopDetails from "../Pages/Shop/ShopDetails";
import Station from "../Pages/Station/Station";

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
        path: "/homepage-two",
        element: <HomePageTwo></HomePageTwo>,
      },
      {
        path: "/homepage-three",
        element: <HomePageThree></HomePageThree>,
      },
      {
        path: "/homepage-four",
        element: <HomePageFour></HomePageFour>,
      },
      {
        path: "/homepage-five",
        element: <HomePageFive></HomePageFive>,
      },

      // single pages

      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },

      // services

      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/service-details/:id",
        element: <ServicesDetails></ServicesDetails>,
      },
      // Gallery

      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },

      // contact us
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      // station
      {
        path: "/station",
        element: <Station></Station>,
      },

      //shop
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/shop-details/:id",
        element: <ShopDetails></ShopDetails>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

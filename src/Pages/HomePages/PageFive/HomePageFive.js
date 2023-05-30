import React from "react";
import About from "../../../Components/HomePageComponents/PageFive/About/About";
import Analytics from "../../../Components/HomePageComponents/PageFive/Analytics/Analytics";
import Banner from "../../../Components/HomePageComponents/PageFive/Banners/Banner";
import CarFeature from "../../../Components/HomePageComponents/PageFive/Car-Features/CarFeature";
import Contact from "../../../Components/HomePageComponents/PageFive/Contact/Contact";
import News from "../../../Components/HomePageComponents/PageFive/News/News";
import Products from "../../../Components/HomePageComponents/PageFive/Products/Products";
import Subscription from "../../../Components/HomePageComponents/PageFive/Subscription/Subscription";
import Team from "../../../Components/HomePageComponents/PageFive/Team/Team";
import Footer from "../../../Components/Shared/FooterOne/Footer";
import Navbar from "../../../Components/Shared/NavbarFive/Navbar";

function HomePageFive() {
  return (
    <>
      <Navbar></Navbar>
      <main className="bg-navyDark">
        <Banner></Banner>
        <About></About>
        <Team></Team>
        <Products></Products>
        <Analytics></Analytics>
        <CarFeature></CarFeature>
        <Contact></Contact>
        <News></News>
        <Subscription></Subscription>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePageFive;

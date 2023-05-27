import React from "react";
import About from "../../Components/PageFiveComponents/About/About";
import Analytics from "../../Components/PageFiveComponents/Analytics/Analytics";
import Banner from "../../Components/PageFiveComponents/Banners/Banner";
import CarFeature from "../../Components/PageFiveComponents/Car-Features/CarFeature";
import Contact from "../../Components/PageFiveComponents/Contact/Contact";
import News from "../../Components/PageFiveComponents/News/News";
import Products from "../../Components/PageFiveComponents/Products/Products";
import Subscription from "../../Components/PageFiveComponents/Subscription/Subscription";
import Team from "../../Components/PageFiveComponents/Team/Team";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarFive/Navbar";

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

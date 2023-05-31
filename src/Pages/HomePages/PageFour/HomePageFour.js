import React from "react";
import About from "../../../Components/HomePageComponents/PageFour/About/About";
import Analytics from "../../../Components/HomePageComponents/PageFour/Analytics/Analytics";
import Banner from "../../../Components/HomePageComponents/PageFour/Banners/Banner";
import CarFeature from "../../../Components/HomePageComponents/PageFour/Car-Features/CarFeature";
import Contact from "../../../Components/HomePageComponents/PageFour/Contact/Contact";
import CustomerList from "../../../Components/HomePageComponents/PageFour/Customer/CustomerList";
import News from "../../../Components/HomePageComponents/PageFour/News/News";
import Products from "../../../Components/HomePageComponents/PageFour/Products/Products";
import Subscription from "../../../Components/HomePageComponents/PageFour/Subscription/Subscription";
import Team from "../../../Components/HomePageComponents/PageFour/Team/Team";
import Footer from "../../../Components/Shared/FooterTwo/Footer";
import Navbar from "../../../Components/Shared/NavbarFour/Navbar";

function HomePageFour() {
  return (
    <>
      <Navbar></Navbar>
      <main className="bg-navyDark">
        <Banner></Banner>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <About></About>
            <Team></Team>
            <Analytics></Analytics>
            <CarFeature></CarFeature>
            <CustomerList></CustomerList>
            <Products></Products>
            <Contact></Contact>
            <News></News>
          </div>
        </div>
        <Subscription></Subscription>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePageFour;

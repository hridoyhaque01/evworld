import React from "react";
import About from "../../Components/PageFourComponents/About/About";
import Analytics from "../../Components/PageFourComponents/Analytics/Analytics";
import Banner from "../../Components/PageFourComponents/Banners/Banner";
import CarFeature from "../../Components/PageFourComponents/Car-Features/CarFeature";
import Contact from "../../Components/PageFourComponents/Contact/Contact";
import CustomerList from "../../Components/PageFourComponents/Customer/CustomerList";
import News from "../../Components/PageFourComponents/News/News";
import Products from "../../Components/PageFourComponents/Products/Products";
import Footer from "../../Components/PageFourComponents/Shared/Footer/Footer";
import Navbar from "../../Components/PageFourComponents/Shared/Navbar/Navbar";
import Subscription from "../../Components/PageFourComponents/Subscription/Subscription";
import Team from "../../Components/PageFourComponents/Team/Team";

function HomePageFour() {
  return (
    <>
      <Navbar></Navbar>
      <main className="bg-navyDark">
        <Banner></Banner>
        <About></About>
        <Team></Team>
        <Analytics></Analytics>
        <CarFeature></CarFeature>
        <CustomerList></CustomerList>
        <Products></Products>
        <Contact></Contact>
        <News></News>
        <Subscription></Subscription>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePageFour;

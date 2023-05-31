import React from "react";
import About from "../../../Components/HomePageComponents/PageThree/About/About";
import Analytics from "../../../Components/HomePageComponents/PageThree/Analytics/Analytics";
import Banner from "../../../Components/HomePageComponents/PageThree/Banners/Banner";
import CarFeature from "../../../Components/HomePageComponents/PageThree/Car-Features/CarFeature";
import Contact from "../../../Components/HomePageComponents/PageThree/Contact/Contact";
import CustomerList from "../../../Components/HomePageComponents/PageThree/Customer/CustomerList";
import News from "../../../Components/HomePageComponents/PageThree/News/News";
import Products from "../../../Components/HomePageComponents/PageThree/Products/Products";
import Subscription from "../../../Components/HomePageComponents/PageThree/Subscription/Subscription";
import Team from "../../../Components/HomePageComponents/PageThree/Team/Team";
import Footer from "../../../Components/Shared/FooterTwo/Footer";
import Navbar from "../../../Components/Shared/NavbarThree/Navbar";

function PageThree() {
  return (
    <>
      <Navbar></Navbar>
      <main className="">
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

export default PageThree;

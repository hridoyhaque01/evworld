import React from "react";
import About from "../../../Components/HomePageComponents/PageOne/About/About";
import Analytics from "../../../Components/HomePageComponents/PageOne/Analytics/Analytics";
import Banner from "../../../Components/HomePageComponents/PageOne/Banners/Banner";
import CarFeature from "../../../Components/HomePageComponents/PageOne/Car-Features/CarFeature";
import Contact from "../../../Components/HomePageComponents/PageOne/Contact/Contact";
import CustomerList from "../../../Components/HomePageComponents/PageOne/Customer/CustomerList";
import News from "../../../Components/HomePageComponents/PageOne/News/News";
import Products from "../../../Components/HomePageComponents/PageOne/Products/Products";
import Team from "../../../Components/HomePageComponents/PageOne/Team/Team";
import Footer from "../../../Components/Shared/FooterOne/Footer";
import Navbar from "../../../Components/Shared/NavbarOne/Navbar";

function PageOne() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <Banner></Banner>
            <About></About>
            <Team></Team>
          </div>
        </div>
        <Analytics></Analytics>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <Products></Products>
            <CarFeature></CarFeature>
            <CustomerList></CustomerList>
            <Contact></Contact>
            <News></News>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default PageOne;

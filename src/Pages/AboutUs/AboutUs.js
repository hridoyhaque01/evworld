import React from "react";
import About from "../../Components/AboutUsComponents/About/About";
import Analytics from "../../Components/AboutUsComponents/Analytics/Analytics";
import Banner from "../../Components/AboutUsComponents/Banner/Banner";
import CustomerList from "../../Components/AboutUsComponents/Customer/CustomerList";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";

function AboutUs() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <About></About>
          </div>
        </div>
        <Analytics></Analytics>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <CustomerList></CustomerList>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;

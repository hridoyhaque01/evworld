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
        <About></About>
        <Analytics></Analytics>
        <CustomerList></CustomerList>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;

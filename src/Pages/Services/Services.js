import React from "react";
import Banner from "../../Components/ServicesComponents/Banner/Banner";
import Contact from "../../Components/ServicesComponents/Contact/Contact";
import ServiceLists from "../../Components/ServicesComponents/Services/ServiceLists";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";

function Services() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <ServiceLists></ServiceLists>
            <Contact></Contact>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Services;

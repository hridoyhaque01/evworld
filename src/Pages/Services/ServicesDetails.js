import React from "react";
import Banner from "../../Components/ServicesDetailsComponents/Banner/Banner";
import News from "../../Components/ServicesDetailsComponents/News/News";
import ServiceInfo from "../../Components/ServicesDetailsComponents/ServiceInfo/ServiceInfo";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";

function ServicesDetails() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <ServiceInfo></ServiceInfo>
            <News></News>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default ServicesDetails;

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
        <ServiceInfo></ServiceInfo>
        <News></News>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default ServicesDetails;

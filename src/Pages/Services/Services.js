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
        <ServiceLists></ServiceLists>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Services;

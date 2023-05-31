import React from "react";
import Banner from "../../Components/ContactUsComponents/Banner/Banner";
import Contact from "../../Components/ContactUsComponents/Contact/Contact";
import ContactDetails from "../../Components/ContactUsComponents/ContactDetails/ContactDetails";
import Location from "../../Components/ContactUsComponents/Location/Location";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";

function ContactUs() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <ContactDetails></ContactDetails>
            <Contact></Contact>
            <Location></Location>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default ContactUs;

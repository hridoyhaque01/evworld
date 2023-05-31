import React from "react";
import About from "../../../Components/HomePageComponents/PageTwo/About/About";
import Analytics from "../../../Components/HomePageComponents/PageTwo/Analytics/Analytics";
import Banner from "../../../Components/HomePageComponents/PageTwo/Banners/Banner";
import CarFeature from "../../../Components/HomePageComponents/PageTwo/Car-Features/CarFeature";
import Contact from "../../../Components/HomePageComponents/PageTwo/Contact/Contact";
import CustomerList from "../../../Components/HomePageComponents/PageTwo/Customer/CustomerList";
import News from "../../../Components/HomePageComponents/PageTwo/News/News";
import Products from "../../../Components/HomePageComponents/PageTwo/Products/Products";
import Team from "../../../Components/HomePageComponents/PageTwo/Team/Team";
import Footer from "../../../Components/Shared/FooterOne/Footer";
import Navbar from "../../../Components/Shared/NavbarTwo/Navbar";

function PageTwo() {
  return (
    <>
      <Navbar></Navbar>
      <main className="">
        <Banner></Banner>
        <About></About>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <Team></Team>
            <Products></Products>
            <Analytics></Analytics>
            <CarFeature></CarFeature>
            <CustomerList></CustomerList>
            <Contact></Contact>
            <News></News>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default PageTwo;

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
        <Banner></Banner>
        <About></About>
        <Team></Team>
        <Analytics></Analytics>
        <Products></Products>
        <CarFeature></CarFeature>
        <CustomerList></CustomerList>
        <Contact></Contact>
        <News></News>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default PageOne;

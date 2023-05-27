import React from "react";
import About from "../../Components/PageOneComponents/About/About";
import Analytics from "../../Components/PageOneComponents/Analytics/Analytics";
import Banner from "../../Components/PageOneComponents/Banners/Banner";
import CarFeature from "../../Components/PageOneComponents/Car-Features/CarFeature";
import Contact from "../../Components/PageOneComponents/Contact/Contact";
import CustomerList from "../../Components/PageOneComponents/Customer/CustomerList";
import News from "../../Components/PageOneComponents/News/News";
import Products from "../../Components/PageOneComponents/Products/Products";
import Team from "../../Components/PageOneComponents/Team/Team";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";

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

import React from "react";
import About from "../../Components/PageOneComponent/About/About";
import Analytics from "../../Components/PageOneComponent/Analytics/Analytics";
import CarFeature from "../../Components/PageOneComponent/Car-Features/CarFeature";
import CustomerList from "../../Components/PageOneComponent/Customer/CustomerList";
import Products from "../../Components/PageOneComponent/Products/Products";
import Team from "../../Components/PageOneComponent/Team/Team";
import Contact from "../../Components/PageOneComponent/Contact/Contact";
import News from "../../Components/PageOneComponent/News/News";
import NavbarOne from "../../Components/PageOneComponent/Shared/Navbar/NavbarOne";
import Banner from "../../Components/PageOneComponent/Banners/Banner";
import FooterOne from "../../Components/PageOneComponent/Shared/Footer/FooterOne";

function PageOne() {
  return (
    <>
      <NavbarOne></NavbarOne>
      <main className="bg-navyDark">
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
      <FooterOne></FooterOne>
    </>
  );
}

export default PageOne;

import React from "react";
import About from "../../Components/PageTwoComponent/About/About";
import Analytics from "../../Components/PageTwoComponent/Analytics/Analytics";
import Banner from "../../Components/PageTwoComponent/Banners/Banner";
import CarFeature from "../../Components/PageTwoComponent/Car-Features/CarFeature";
import Contact from "../../Components/PageTwoComponent/Contact/Contact";
import CustomerList from "../../Components/PageTwoComponent/Customer/CustomerList";
import News from "../../Components/PageTwoComponent/News/News";
import Products from "../../Components/PageTwoComponent/Products/Products";
import FooterTwo from "../../Components/PageTwoComponent/Shared/Footer/FooterTwo";
import NavbarTwo from "../../Components/PageTwoComponent/Shared/Navbar/NavbarTwo";
import Team from "../../Components/PageTwoComponent/Team/Team";

function PageTwo() {
  return (
    <>
      <NavbarTwo></NavbarTwo>
      <main className="">
        <Banner></Banner>
        <About></About>
        <Team></Team>
        <Products></Products>
        <Analytics></Analytics>
        <CarFeature></CarFeature>
        <CustomerList></CustomerList>
        <Contact></Contact>
        <News></News>
      </main>
      <FooterTwo></FooterTwo>
    </>
  );
}

export default PageTwo;

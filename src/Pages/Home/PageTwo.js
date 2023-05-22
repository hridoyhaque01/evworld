import React from "react";
import About from "../../Components/PageTwoComponent/About/About";
import Analytics from "../../Components/PageTwoComponent/Analytics/Analytics";
import CarFeature from "../../Components/PageTwoComponent/Car-Features/CarFeature";
import CustomerList from "../../Components/PageTwoComponent/Customer/CustomerList";
import ProductList from "../../Components/PageTwoComponent/Products/ProductList";
import Team from "../../Components/PageTwoComponent/Team/Team";
import Contact from "../../Components/PageTwoComponent/Contact/Contact";
import News from "../../Components/PageTwoComponent/News/News";
import NavbarTwo from "../../Components/PageTwoComponent/Shared/Navbar/NavbarTwo";
import FooterTwo from "../../Components/PageTwoComponent/Shared/Footer/FooterTwo";
import Banner from "../../Components/PageTwoComponent/Banners/Banner";

function PageTwo() {
  return (
    <>
      <NavbarTwo></NavbarTwo>
      <main className="">
        <Banner></Banner>
        <About></About>
        <Team></Team>
        <Analytics></Analytics>
        <ProductList></ProductList>
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

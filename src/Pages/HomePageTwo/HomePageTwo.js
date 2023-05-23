import React from "react";
import About from "../../Components/PageTwoComponents/About/About";
import Analytics from "../../Components/PageTwoComponents/Analytics/Analytics";
import Banner from "../../Components/PageTwoComponents/Banners/Banner";
import CarFeature from "../../Components/PageTwoComponents/Car-Features/CarFeature";
import Contact from "../../Components/PageTwoComponents/Contact/Contact";
import CustomerList from "../../Components/PageTwoComponents/Customer/CustomerList";
import News from "../../Components/PageTwoComponents/News/News";
import Products from "../../Components/PageTwoComponents/Products/Products";
import Footer from "../../Components/PageTwoComponents/Shared/Footer/Footer";
import Navbar from "../../Components/PageTwoComponents/Shared/Navbar/Navbar";
import Team from "../../Components/PageTwoComponents/Team/Team";

function PageTwo() {
  return (
    <>
      <Navbar></Navbar>
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
      <Footer></Footer>
    </>
  );
}

export default PageTwo;

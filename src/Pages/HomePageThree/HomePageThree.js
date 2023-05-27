import React from "react";
import About from "../../Components/PageThreeComponents/About/About";
import Analytics from "../../Components/PageThreeComponents/Analytics/Analytics";
import Banner from "../../Components/PageThreeComponents/Banners/Banner";
import CarFeature from "../../Components/PageThreeComponents/Car-Features/CarFeature";
import Contact from "../../Components/PageThreeComponents/Contact/Contact";
import CustomerList from "../../Components/PageThreeComponents/Customer/CustomerList";
import News from "../../Components/PageThreeComponents/News/News";
import Products from "../../Components/PageThreeComponents/Products/Products";
import Subscription from "../../Components/PageThreeComponents/Subscription/Subscription";
import Team from "../../Components/PageThreeComponents/Team/Team";
import Footer from "../../Components/Shared/FooterTwo/Footer";
import Navbar from "../../Components/Shared/NavbarThree/Navbar";

function PageThree() {
  return (
    <>
      <Navbar></Navbar>
      <main className="">
        <Banner></Banner>
        <About></About>
        <Team></Team>
        <Analytics></Analytics>
        <CarFeature></CarFeature>
        <CustomerList></CustomerList>
        <Products></Products>
        <Contact></Contact>
        <News></News>
        <Subscription></Subscription>
      </main>
      <Footer></Footer>
    </>
  );
}

export default PageThree;

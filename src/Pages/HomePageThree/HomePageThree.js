import React from "react";
import About from "../../Components/PageThreeComponents/About/About";
import Analytics from "../../Components/PageThreeComponents/Analytics/Analytics";
import Banner from "../../Components/PageThreeComponents/Banners/Banner";
import CarFeature from "../../Components/PageThreeComponents/Car-Features/CarFeature";
import Contact from "../../Components/PageThreeComponents/Contact/Contact";
import CustomerList from "../../Components/PageThreeComponents/Customer/CustomerList";
import News from "../../Components/PageThreeComponents/News/News";
import Products from "../../Components/PageThreeComponents/Products/Products";
import Footer from "../../Components/PageThreeComponents/Shared/Footer/Footer";
import Navbar from "../../Components/PageThreeComponents/Shared/Navbar/Navbar";
import Team from "../../Components/PageThreeComponents/Team/Team";

function PageThree() {
  return (
    <>
      <Navbar></Navbar>
      <main className="">
        <Banner></Banner>
        <About></About>
        <Team></Team>
        {/* <Products></Products>     67uhhbn      */}
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

export default PageThree;

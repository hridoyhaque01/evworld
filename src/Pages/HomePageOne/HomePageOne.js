import React from "react";
import About from "../../Components/PageOneComponents/About/About";
import Analytics from "../../Components/PageOneComponents/Analytics/Analytics";
import CarFeature from "../../Components/PageOneComponents/Car-Features/CarFeature";
import CustomerList from "../../Components/PageOneComponents/Customer/CustomerList";
import Products from "../../Components/PageOneComponents/Products/Products";
import Team from "../../Components/PageOneComponents/Team/Team";
import Contact from "../../Components/PageOneComponents/Contact/Contact";
import News from "../../Components/PageOneComponents/News/News";
import Navbar from "../../Components/PageOneComponents/Shared/Navbar/Navbar";
import Banner from "../../Components/PageOneComponents/Banners/Banner";
import Footer from "../../Components/PageOneComponents/Shared/Footer/Footer";

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

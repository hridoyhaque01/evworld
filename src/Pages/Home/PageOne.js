import React from "react";
import About from "../../Components/HomeComponent/About/About";
import Analytics from "../../Components/HomeComponent/Analytics/Analytics";
import CarFeature from "../../Components/HomeComponent/Car-Features/CarFeature";
import { CustomerList } from "../../Components/HomeComponent/Customer/CustomerList";
import Products from "../../Components/HomeComponent/Products/Products";
import { Team } from "../../Components/HomeComponent/Team/Team";
import Banner from "../../Components/Shared/Banners/Banner";

function PageOne() {
  return (
    <main>
      <Banner></Banner>
      <About></About>
      <Team></Team>
      <Analytics></Analytics>
      <Products></Products>
      <CarFeature></CarFeature>
      <CustomerList></CustomerList>
    </main>
  );
}

export default PageOne;

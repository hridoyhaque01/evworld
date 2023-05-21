import React from "react";
import About from "../../Components/HomeComponent/About/About";
import CarFeature from "../../Components/HomeComponent/Car-Features/CarFeature";
import { Team } from "../../Components/HomeComponent/Team/Team";
import Banner from "../../Components/Shared/Banners/Banner";
import Analytics from "../../Components/HomeComponent/Analytics/Analytics";
import Products from "../../Components/HomeComponent/Products/Products";

function PageOne() {
  return (
    <main>
      <Banner></Banner>
      <About></About>
      <Team></Team>
      <Analytics></Analytics>
      <Products></Products>

      <CarFeature></CarFeature>
    </main>
  );
}

export default PageOne;

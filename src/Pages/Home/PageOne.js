import React from "react";
import About from "../../Components/HomeComponent/About/About";
import { Team } from "../../Components/HomeComponent/Team/Team";
import Banner from "../../Components/Shared/Banners/Banner";

function PageOne() {
  return (
    <main>
      <Banner></Banner>
      <About></About>
      {/* <CarFeature></CarFeature> */}
      <Team></Team>
    </main>
  );
}

export default PageOne;

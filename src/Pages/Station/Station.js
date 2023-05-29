import React from "react";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";
import StationTracker from "../../Components/StationPageComponents/StationTracker/StationTracker";
import Subscription from "../../Components/StationPageComponents/Subscription/Subscription";

function Sation() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <StationTracker></StationTracker>
        <Subscription></Subscription>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Sation;

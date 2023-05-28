import React from "react";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";
import Banner from "../../Components/ShopComponents/Banner/Banner";
import ShopProducts from "../../Components/ShopComponents/ShopProducts/ShopProducts";
import Subscription from "../../Components/ShopComponents/Subscription/Subscription";

function Shop() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <ShopProducts></ShopProducts>
        <Subscription></Subscription>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Shop;

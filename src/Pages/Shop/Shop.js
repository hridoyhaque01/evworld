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
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <ShopProducts></ShopProducts>
          </div>
        </div>
        <Subscription></Subscription>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Shop;

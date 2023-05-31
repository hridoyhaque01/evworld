import React from "react";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";
import Banner from "../../Components/ShopDetailsComponents/Banner/Banner";
import Products from "../../Components/ShopDetailsComponents/Products/Products";
import Description from "../../Components/ShopDetailsComponents/ShopProductDetails/Description";
import ShopProductDetails from "../../Components/ShopDetailsComponents/ShopProductDetails/ShopProductDetails";

function ShopDetails() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <ShopProductDetails></ShopProductDetails>
            <Description></Description>
            <Products></Products>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default ShopDetails;

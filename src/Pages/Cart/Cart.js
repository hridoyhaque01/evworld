import React from "react";
import Banner from "../../Components/CartComponents/Banner/Banner";
import CartDetails from "../../Components/CartComponents/CartDetails/CartDetails";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";

function Cart() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <CartDetails></CartDetails>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Cart;

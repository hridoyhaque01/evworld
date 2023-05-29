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
        <CartDetails></CartDetails>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Cart;

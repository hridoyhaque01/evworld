import React from "react";
import Banner from "../../Components/CheckoutComponents/Banner/Banner";
import CheckoutForm from "../../Components/CheckoutComponents/CheckoutForm/CheckoutForm";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";

function Checkout() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <CheckoutForm></CheckoutForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Checkout;

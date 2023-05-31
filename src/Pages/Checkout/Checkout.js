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
        <div className="px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-[1180px] mx-auto">
            <CheckoutForm></CheckoutForm>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Checkout;

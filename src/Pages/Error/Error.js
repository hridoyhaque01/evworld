import React from "react";

import { Link } from "react-router-dom";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";
import { error } from "../../utils/getImages";

function Error() {
  return (
    <div className="max-w-[1440px] mx-auto bg-navyDark">
      <Navbar></Navbar>
      <main>
        <section className="h-screen w-full">
          <div className="h-full flex flex-col items-center justify-center gap-6 md:gap-12">
            <div>
              <img src={error} alt="" className="w-52 md:w-[500px]" />
            </div>
            <p className="text-pureWhite text-base md:text-2xl uppercase">
              GO TO{" "}
              <Link to="/" className="text-primaryColor">
                HOMEPAGE
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Error;

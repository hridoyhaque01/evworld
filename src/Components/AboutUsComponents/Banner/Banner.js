import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="py-32 md:py-36 lg:py-48 bg-bannerOne bg-no-repeat bg-top bg-cover">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-6xl font-clashBold text-primaryColor">
          ABOUT US
        </h1>
        <ul className="flex items-center text-pureWhite text-base md:text-2xl">
          <li>
            <Link to="/" className="hover:text-primaryColor">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>About us</li>
        </ul>
      </div>
    </section>
  );
}

export default Banner;
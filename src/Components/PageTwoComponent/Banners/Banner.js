import React from "react";

function Banner() {
  return (
    <section className="text-pureWhite bg-bannerBg bg-no-repeat bg-bottom bg-cover object-contain flex items-center px-16 pt-32 pb-14 md:pt-64 md:pb-36 xl:pb-56 md:pl-28">
      <div className="text-center md:text-left md:max-w-[590px]">
        <h1 className="font-bebas text-4xl md:text-8xl xl:text-9xl  uppercase text-primaryColor">
          Drive beyond
        </h1>
        <p className="text-base md:text-2xl mb-10">
          We believe that a greener future is possible, and we are committed to
          making it a reality.
        </p>
        <button
          type="button"
          className="capitalize bg-primaryColor py-3 md:py-5 text-base md:text-2xl font-bold text-blackFadeDark w-36 md:w-48 lg:w-96 rounded-full duration-200"
        >
          find station
        </button>
      </div>
    </section>
  );
}

export default Banner;

import React from "react";

function Banner() {
  return (
    <section className="bg-bannerOne bg-no-repeat bg-bottom bg-cover object-contain  p-6 pb-12 md:pt-24 xl:pt-56 md:pb-48 xl:pb-72">
      <div className="max-w-[1180px] mx-auto">
        <div className="md:max-w-[576px] text-center md:text-left">
          <h1 className="font-bold text-2xl md:text-6xl  uppercase text-pureWhite">
            Driving Towards a Sustainable Future
          </h1>
          <button
            type="button"
            className="capitalize bg-primaryColor py-3 md:py-5 text-base md:text-2xl font-bold text-blackFadeDark w-36 md:w-48 lg:w-96 rounded-full duration-200 mt-10 "
          >
            find station
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;

//
//
//
//
//
//
//

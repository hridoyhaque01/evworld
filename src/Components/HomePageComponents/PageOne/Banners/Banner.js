import React from "react";

function Banner() {
  return (
    <section className="px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className=" text-pureWhite bg-bannerOne bg-no-repeat bg-bottom bg-cover object-contain rounded-[40px] py-12 md:py-24  px-4 lg:py-32 lg:px-10 flex items-center justify-center gap-4">
          {/* details  */}
          <div className="flex flex-col justify-between gap-2 uppercase">
            <div
              className=" flex items-center  gap-x-1 max-w-max max-h-max -rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              <h2 className="text-base md:text-3xl lg:text-4xl  text-primaryColor uppercase font-bold ">
                200
              </h2>
              <span className="sm:text-[8px] md:text-base leading-none">
                mph <br /> Top Speed
              </span>
            </div>
            <div
              className=" flex items-center  gap-x-1 max-w-max max-h-max -rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              <h2 className="text-base md:text-3xl lg:text-4xl text-primaryColor uppercase font-bold ">
                1.99
              </h2>
              <span className="sm:text-[8px] md:text-base leading-none">
                sec <br /> 0-60 mph*
              </span>
            </div>
            <div
              className=" flex items-center  gap-x-1 max-w-max max-h-max -rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              <h2 className="text-base md:text-3xl lg:text-4xl text-primaryColor uppercase font-bold ">
                460
              </h2>
              <span className="sm:text-[8px] md:text-base leading-none">
                mi
                <br /> Range
              </span>
            </div>
          </div>
          {/* heading  */}

          <div className="flex-1">
            <div className=" sm:max-w-sm md:max-w-3xl  text-center mx-auto">
              <h1 className="font-clashBold text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-primaryColor">
                Drive beyond
              </h1>
              <p className="text-base md:text-2xl mb-10">
                We believe that a greener future is possible, and we are
                committed to making it a reality.
              </p>
              <button
                type="button"
                className="capitalize bg-primaryColor py-3 md:py-5 text-base lg:text-2xl font-bold text-blackFadeDark w-36 md:w-48 lg:w-96 rounded-full duration-200"
              >
                find station
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

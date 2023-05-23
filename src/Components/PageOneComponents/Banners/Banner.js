import React from "react";

function Banner() {
  return (
    <section className="px-6 lg:px-28 2xl:px-32">
      <div className=" text-pureWhite bg-bannerBg bg-no-repeat bg-bottom bg-cover object-contain rounded-[40px] py-12 md:py-24 pl-0 pr-4 lg:py-32 lg:px-10 flex items-center justify-center">
        {/* details  */}
        <div className="flex flex-col justify-between gap-14 md:gap-20">
          <div className=" flex items-center  gap-x-1 -rotate-90 max-w-max max-h-max">
            <h2 className="text-base md:text-3xl lg:text-4xl  text-primaryColor uppercase font-bold ">
              200
            </h2>
            <span className="sm:text-[8px] md:text-base leading-none">
              mh <br /> speed
            </span>
          </div>
          <div className=" flex items-center  gap-x-1 -rotate-90 max-w-max max-h-max">
            <h2 className="text-base md:text-3xl lg:text-4xl text-primaryColor uppercase font-bold ">
              200
            </h2>
            <span className="sm:text-[8px] md:text-base leading-none">
              mh <br /> speed
            </span>
          </div>
          <div className=" flex items-center  gap-x-1 -rotate-90 max-w-max max-h-max">
            <h2 className="text-base md:text-3xl lg:text-4xl text-primaryColor uppercase font-bold ">
              200
            </h2>
            <span className="sm:text-[8px] md:text-base leading-none">
              mh <br /> speed
            </span>
          </div>
        </div>
        {/* heading  */}

        <div className="flex-1">
          <div className=" sm:max-w-sm md:max-w-3xl  text-center mx-auto">
            <h1 className="font-clashBold sm:text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-primaryColor">
              Drive beyond
            </h1>
            <p className="text-base md:text-2xl mb-10">
              We believe that a greener future is possible, and we are committed
              to making it a reality.
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
    </section>
  );
}

export default Banner;

import React from "react";
import { safety } from "../../../Assets/getImages";

function TopRightFeature() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center flex-row-reverse w-[6.4rem] sm:w-36 md:w-44 lg:w-52 xl:w-64 gap-1 lg:gap-2 ml-auto">
        <div className="">
          <h2 className="text-[0.624rem] sm:text-sm md:text-base text-whiteHigh">
            Car Size
          </h2>
          <p className="text-whiteHigh text-[0.43rem] sm:text-[0.624rem] md:text-xs ">
            Compact hatchback seats four with 4m length and 1.7m width.
          </p>
        </div>
        <div className="shrink-0">
          <img src={safety} alt="feature" className="w-7 md:w-14 " />
        </div>
      </div>
      <div>
        <div className="hidden xl:block">
          <svg
            height="121"
            viewBox="0 0 445 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-96 duration-300"
          >
            <path
              d="M7.8418 113.258L125.245 1H445"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <ellipse
              cx="7.84141"
              cy="113.258"
              rx="7.84141"
              ry="7.74194"
              fill="#C1EF00"
            />
          </svg>
        </div>

        <div className="hidden md:block xl:hidden">
          <svg
            height="121"
            viewBox="0 0 309 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-64 lg:w-72 duration-300"
          >
            <path
              d="M8.22656 113.258L88.8911 1H308.587"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <circle cx="8.29297" cy="113" r="8" fill="#C1EF00" />
          </svg>
        </div>

        <div className="block md:hidden">
          <svg
            height="53"
            viewBox="0 0 188 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[8.2rem] sm:w-48 duration-300"
          >
            <path d="M3.56445 49L52.9793 1H187.564" stroke="#C1EF00" />
            <circle cx="4.02539" cy="49" r="4" fill="#C1EF00" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TopRightFeature;

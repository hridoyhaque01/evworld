import React from "react";
import { safety } from "../../../Assets/getImages";

function TopRightFeature() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-36 lg:w-56 2xl:w-80 flex items-center gap-2 ml-auto">
        <div className="">
          <h4 className="text-[10px] lg:text-base 2xl:text-2xl font-bold text-whiteHigh ">
            Car Size
          </h4>
          <p className="text-[8px] lg:text-sm 2xl:text-base text-justify text-whiteHigh">
            Compact hatchback seats four with 4m length and 1.7m width.
          </p>
        </div>
        <div className="shrink-0">
          <img src={safety} alt="car feature" className="w-6 lg:w-auto" />
        </div>
      </div>
      <div className="">
        <div className="hidden 2xl:block">
          <svg
            width="445"
            height="121"
            viewBox="0 0 445 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        <div className="hidden lg:block 2xl:hidden">
          <svg
            width="309"
            height="121"
            viewBox="0 0 309 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.22656 113.258L88.8911 1H308.587"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <circle cx="8.29297" cy="113" r="8" fill="#C1EF00" />
          </svg>
        </div>
        <div className="block lg:hidden">
          <svg
            height="53"
            viewBox="0 0 188 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[120px] sm:w-[189px]"
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

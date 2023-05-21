import React from "react";
import { eco } from "../../../Assets/getImages";

function BotttomLeftFeature() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="hidden xl:block">
          <svg
            height="125"
            viewBox="0 0 454 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-96 duration-300"
          >
            <path
              d="M446 8L326.223 124H7.86781e-06"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <circle
              cx="446"
              cy="8"
              r="8"
              transform="rotate(180 446 8)"
              fill="#C1EF00"
            />
          </svg>
        </div>

        <div className="hidden md:block xl:hidden">
          <svg
            height="119"
            viewBox="0 0 313 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-64 lg:w-72"
          >
            <path
              d="M306.436 2L224.14 118H0.000174046"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <circle
              cx="304.932"
              cy="8"
              r="8"
              transform="rotate(180 304.932 8)"
              fill="#C1EF00"
            />
          </svg>
        </div>

        <div className="block md:hidden">
          <svg
            height="53"
            viewBox="0 0 187 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[8.2rem] sm:w-48"
          >
            <path d="M184 4L134.585 52H3.8147e-06" stroke="#C1EF00" />
            <circle
              cx="183"
              cy="4"
              r="4"
              transform="rotate(180 183 4)"
              fill="#C1EF00"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center w-[6.4rem] sm:w-36 md:w-44 lg:w-52 xl:w-64 gap-1 lg:gap-2">
        <div className="text-right">
          <h2 className="text-[0.624rem] sm:text-sm md:text-base text-whiteHigh">
            Car Size
          </h2>
          <p className="text-whiteHigh text-[0.43rem] sm:text-[0.624rem] md:text-xs ">
            Compact hatchback seats four with 4m length and 1.7m width.
          </p>
        </div>
        <div className="shrink-0">
          <img src={eco} alt="feature" className="w-7 md:w-14 " />
        </div>
      </div>
    </div>
  );
}

export default BotttomLeftFeature;

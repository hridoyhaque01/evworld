import React from "react";
import { carSize } from "../../../Assets/getImages";

function TopLeftFeature() {
  return (
    <div className="flex flex-col">
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
          <img src={carSize} alt="feature" className="w-7 md:w-14 " />
        </div>
      </div>
      <div>
        <div className="hidden xl:block">
          <svg
            height="121"
            viewBox="0 0 441 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-96 duration-300"
          >
            <path
              d="M433.229 113.258L316.881 1H-0.000546932"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <ellipse
              cx="7.77093"
              cy="7.74194"
              rx="7.77093"
              ry="7.74194"
              transform="matrix(-1 0 0 1 441 105.516)"
              fill="#C1EF00"
            />
          </svg>
        </div>

        <div className="hidden md:block xl:hidden">
          <svg
            height="121"
            viewBox="0 0 306 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-64 lg:w-72 duration-300"
          >
            <path
              d="M298.369 113.258L218.43 1H0.708353"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 306 105)"
              fill="#C1EF00"
            />
          </svg>
        </div>

        <div className="block md:hidden">
          <svg
            height="53"
            viewBox="0 0 189 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[8.2rem] sm:w-48 duration-300"
          >
            <path d="M184 49L134.585 1H2.20537e-06" stroke="#C1EF00" />
            <circle
              cx="4"
              cy="4"
              r="4"
              transform="matrix(-1 0 0 1 188.025 45)"
              fill="#C1EF00"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TopLeftFeature;

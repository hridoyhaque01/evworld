import React from "react";
import { carSize } from "../../../Assets/getImages";

function TopLeftFeature() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-36 lg:w-56 2xl:w-80 flex items-center gap-2">
        <div className="text-right">
          <h4 className="text-[10px] lg:text-base 2xl:text-2xl font-bold text-whiteHigh ">
            Car Size
          </h4>
          <p className="text-[8px] lg:text-sm 2xl:text-base text-justify text-whiteHigh">
            Compact hatchback seats four with 4m length and 1.7m width.
          </p>
        </div>
        <div className="shrink-0">
          <img src={carSize} alt="car feature" className="w-6 lg:w-auto" />
        </div>
      </div>
      <div className="">
        <div className="hidden 2xl:block">
          <svg
            width="441"
            height="121"
            viewBox="0 0 441 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        <div className="hidden lg:block 2xl:hidden">
          <svg
            width="306"
            height="121"
            viewBox="0 0 306 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        <div className="block lg:hidden">
          <svg
            height="53"
            viewBox="0 0 189 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[120px] sm:w-[189px]"
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

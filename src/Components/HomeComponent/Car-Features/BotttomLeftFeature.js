import React from "react";
import { eco } from "../../../Assets/getImages";

function BotttomLeftFeature() {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <div className="hidden 2xl:block">
          <svg
            width="454"
            height="125"
            viewBox="0 0 454 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        <div className="hidden lg:block 2xl:hidden">
          <svg
            width="313"
            height="119"
            viewBox="0 0 313 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        <div className="block lg:hidden">
          <svg
            width="144"
            height="53"
            viewBox="0 0 187 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
      <div className="max-w-36 lg:w-56 2xl:w-80 flex items-center gap-2">
        <div className="text-right">
          <h4 className="text-[10px] lg:text-base 2xl:text-2xl font-bold text-whiteHigh ">
            Car Size
          </h4>
          <p className="text-[8px] lg:text-sm 2xl:text-base text-justify text-whiteHigh">
            Compact hatchback seats four with 4m length and 1.7m width.
          </p>
        </div>
        <div className="shrink-0">
          <img src={eco} alt="car feature" className="w-6 lg:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default BotttomLeftFeature;

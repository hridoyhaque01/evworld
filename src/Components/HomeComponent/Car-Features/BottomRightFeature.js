import React from "react";
import { braking } from "../../../Assets/getImages";

function BottomRightFeature() {
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
            <path d="M8 8L127.777 124H454" stroke="#C1EF00" stroke-width="2" />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(1 0 0 -1 0 16)"
              fill="#C1EF00"
            />
          </svg>
        </div>
        <div className="hidden lg:block 2xl:hidden">
          <svg
            width="312"
            height="119"
            viewBox="0 0 312 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.26562 2L87.5616 118H311.701"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(1 0 0 -1 0.769531 16)"
              fill="#C1EF00"
            />
          </svg>
        </div>
        <div className="block lg:hidden">
          <svg
            width="120"
            height="54"
            viewBox="0 0 189 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.20312 5L53.618 53H188.203" stroke="#C1EF00" />
            <ellipse
              cx="4"
              cy="4.0068"
              rx="4"
              ry="4.0068"
              transform="matrix(1 0 0 -1 0 9)"
              fill="#C1EF00"
            />
          </svg>
        </div>
      </div>
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
          <img src={braking} alt="car feature" className="w-6 lg:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default BottomRightFeature;

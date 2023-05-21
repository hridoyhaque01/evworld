import React from "react";
import { braking } from "../../../Assets/getImages";

function BottomRightFeature() {
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

        <div className="hidden md:block xl:hidden">
          <svg
            height="119"
            viewBox="0 0 312 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-64 lg:w-72 duration-300"
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

        <div className="block md:hidden">
          <svg
            height="54"
            viewBox="0 0 189 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[8.2rem] sm:w-48 duration-300"
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
          <img src={braking} alt="feature" className="w-7 md:w-14 " />
        </div>
      </div>
    </div>
  );
}

export default BottomRightFeature;

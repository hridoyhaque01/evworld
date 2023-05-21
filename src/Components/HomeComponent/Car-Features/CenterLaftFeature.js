import React from "react";

function CenterLaftFeature({ image, title, texts }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-1 md:gap-2 w-20 sm:w-24 md:w-36 lg:w-44 xl:w-56">
        <div className="text-right">
          <h2 className="text-[0.5rem] sm:text-xs  xl:text-xl text-whiteHigh uppercase font-bold">
            {title}
          </h2>
          <p className="text-whiteHigh text-[0.43rem] sm:text-[0.624rem] md:text-xs text-justify">
            {texts}
          </p>
        </div>
        <div className="shrink-0 ">
          <img src={image} alt="feature" className="w-5 md:w-16" />
        </div>
      </div>

      <div className="-mt-6 md:-mt-20 lg:-mt-24 xl:-mt-20">
        <div className="hidden xl:block">
          <svg
            height="104"
            viewBox="0 0 376 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-80 duration-300"
          >
            <path
              d="M369.375 7.31464L270.176 102.734H0.000585318"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <ellipse
              cx="369.374"
              cy="7.31532"
              rx="6.62555"
              ry="6.58067"
              transform="rotate(180 369.374 7.31532)"
              fill="#C1EF00"
            />
          </svg>
        </div>
        <div className="hidden md:block xl:hidden">
          <svg
            height="104"
            viewBox="0 0 260 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-48 lg:w-64 duration-300"
          >
            <path
              d="M253.789 7.58027L185.632 103H0.00119972"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <circle
              cx="252"
              cy="8"
              r="8"
              transform="rotate(180 252 8)"
              fill="#C1EF00"
            />
          </svg>
        </div>
        <div className="block md:hidden">
          <svg
            height="29"
            viewBox="0 0 125 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[6.4rem] sm:w-32 duration-300"
          >
            <path d="M120.293 4L88.0659 28H0.292972" stroke="#C1EF00" />
            <circle
              cx="120.293"
              cy="4"
              r="4"
              transform="rotate(180 120.293 4)"
              fill="#C1EF00"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CenterLaftFeature;

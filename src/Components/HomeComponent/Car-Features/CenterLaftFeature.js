import React from "react";

function CenterLaftFeature({ image, title, texts }) {
  return (
    <div className="relative">
      <div className="w-24 lg:w-48 2xl:w-72 flex items-center gap-2">
        <div className="text-right">
          <h4 className="font-bold text-[10px] lg:text-sm 2xl:text-xl text-whiteHigh uppercase">
            {title}
          </h4>
          <p className="font-medium text-[8px] lg:text-[10px] 2xl:text-sm text-whiteHigh text-justify">
            {texts}
          </p>
        </div>
        <div className="shrink-0">
          <img src={image} alt="car feature" className="w-4 lg:w-auto" />
        </div>
      </div>
      <div className="absolute -top-4">
        <div className="hidden 2xl:block">
          <svg
            width="376"
            height="104"
            viewBox="0 0 376 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        <div className="hidden lg:block 2xl:hidden">
          <svg
            width="260"
            height="104"
            viewBox="0 0 260 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        <div className="block lg:hidden">
          <svg
            height="29"
            viewBox="0 0 125 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-100 sm:w-[120]"
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

import React from "react";

function CenterRightFeature({ image, title, texts }) {
  return (
    <div className="relative">
      <div className="w-24 lg:w-48 2xl:w-72 flex items-center gap-2 ml-auto">
        <div className="">
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
      <div className="absolute -top-4 right-0">
        <div className="hidden 2xl:block">
          <svg
            width="376"
            height="104"
            viewBox="0 0 376 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.625 7.31464L105.824 102.734H375.999"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <ellipse
              cx="6.62555"
              cy="6.58067"
              rx="6.62555"
              ry="6.58067"
              transform="matrix(1 0 0 -1 0 13.896)"
              fill="#C1EF00"
            />
          </svg>
        </div>
        <div className="hidden lg:block 2xl:hidden">
          <svg
            width="261"
            height="104"
            viewBox="0 0 261 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.21094 7.58027L75.3679 103H260.999"
              stroke="#C1EF00"
              stroke-width="2"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(1 0 0 -1 0 16)"
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
            <path d="M4.49609 4L36.6684 28H124.292" stroke="#C1EF00" />
            <ellipse
              cx="3.99321"
              cy="4"
              rx="3.99321"
              ry="4"
              transform="matrix(1 0 0 -1 0.292969 8)"
              fill="#C1EF00"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CenterRightFeature;

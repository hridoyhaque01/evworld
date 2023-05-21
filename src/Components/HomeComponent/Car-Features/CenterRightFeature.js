import React from "react";

function CenterRightFeature({ image, title, texts }) {
  return (
    <div className="relative">
      <div className="flex flex-row-reverse items-center gap-1 md:gap-2 w-16 sm:w-24 md:w-36 lg:w-44 xl:w-56 ml-auto">
        <div className="">
          <h2 className="text-[0.5rem] sm:text-xs  xl:text-xl text-whiteHigh uppercase font-bold">
            {title}
          </h2>
          <p className="text-whiteHigh text-[0.43rem] sm:text-[0.624rem] md:text-xs text-justify">
            {texts}
          </p>
        </div>
        <div className="shrink-0 ">
          <img src={image} alt="feature" className="w-5 md:w-16 " />
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
        <div className="hidden md:block xl:hidden">
          <svg
            height="104"
            viewBox="0 0 261 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-48 lg:w-64 duration-300"
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
        <div className="block md:hidden">
          <svg
            height="29"
            viewBox="0 0 125 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[6.4rem] sm:w-32 duration-300"
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

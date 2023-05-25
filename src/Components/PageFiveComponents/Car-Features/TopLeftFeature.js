import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { carSize } from "../../../Assets/getImages";

function TopLeftFeature() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const svgRef = useRef();

  const animateSvg = () => {
    svgRef.current.classList.add("animate-svg");
  };

  useEffect(() => {
    if (inView) {
      animateSvg();
    }
  }, [inView]);
  return (
    <div className="flex flex-col" ref={ref}>
      <div
        className="flex items-center w-[6.4rem] sm:w-36 md:w-44 lg:w-52 xl:w-64 gap-1 lg:gap-2 duration-300 text-pureWhite"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <div className="text-right">
          <h2 className="text-[0.624rem] sm:text-sm md:text-base duration-300">
            Car Size
          </h2>
          <p className="text-[0.43rem] sm:text-[0.624rem] md:text-xs duration-300">
            Compact hatchback seats four with 4m length and 1.7m width.
          </p>
        </div>
        <div className="shrink-0">
          <img src={carSize} alt="feature" className="w-7 md:w-14 " />
        </div>
      </div>
      <div className="mt-2">
        <svg
          viewBox="0 0 441 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 sm:w-48 md:w-64 lg:w-72 xl:w-96 duration-300"
          ref={svgRef}
        >
          <path
            d="M433.229 113.258L316.881 1H-0.000546932"
            stroke="#C1EF00"
            strokeWidth="2"
            className="opacity-0"
          />
          <ellipse
            cx="7.77093"
            cy="7.74194"
            rx="7.77093"
            ry="7.74194"
            transform="matrix(-1 0 0 1 441 105.516)"
            fill="#C1EF00"
            className="opacity-0"
          />
        </svg>
      </div>
    </div>
  );
}

export default TopLeftFeature;

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { safety } from "../../../Assets/getImages";

function TopRightFeature() {
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
        className="flex items-center flex-row-reverse w-[6.4rem] sm:w-36 md:w-44 lg:w-52 xl:w-64 gap-1 lg:gap-2 ml-auto duration-300 text-pureWhite"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <div>
          <h2 className="text-[0.624rem] sm:text-sm md:text-base duration-300">
            Safety
          </h2>
          <p className="text-[0.43rem] sm:text-[0.624rem] md:text-xs duration-300">
            The car has safety features: ESC, ABS, and airbags.
          </p>
        </div>
        <div className="shrink-0">
          <img src={safety} alt="feature" className="w-7 md:w-14 " />
        </div>
      </div>

      <div className="mt-2">
        <svg
          viewBox="0 0 445 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 sm:w-48 md:w-64 lg:w-72 xl:w-96 duration-300"
          ref={svgRef}
        >
          <path
            d="M7.8418 113.258L125.245 1H445"
            stroke="#C1EF00"
            strokeWidth="2"
            className="opacity-0"
          />
          <ellipse
            cx="7.84141"
            cy="113.258"
            rx="7.84141"
            ry="7.74194"
            fill="#C1EF00"
            className="opacity-0"
          />
        </svg>
      </div>
    </div>
  );
}

export default TopRightFeature;

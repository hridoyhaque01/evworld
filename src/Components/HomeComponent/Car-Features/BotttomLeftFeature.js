import React, { useEffect, useRef } from "react";
import { eco } from "../../../Assets/getImages";
import { useInView } from "react-intersection-observer";

function BotttomLeftFeature() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const svgRef = useRef();
  const fadeRef = useRef();

  const animateSvg = () => {
    svgRef.current.classList.add("animate-svg");
    fadeRef.current.classList.add("animate-text");
  };

  console.log(svgRef);

  useEffect(() => {
    if (inView) {
      animateSvg();
    }
  }, [inView]);

  return (
    <div className="flex flex-col" ref={ref}>
      <div className="mb-2">
        <svg
          viewBox="0 0 454 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 sm:w-48 md:w-64 lg:w-72 xl:w-96 duration-300"
          ref={svgRef}
        >
          <path
            d="M446 8L326.223 124H7.86781e-06"
            stroke="#C1EF00"
            strokeWidth="2"
            className="opacity-0"
          />
          <circle
            cx="446"
            cy="8"
            r="8"
            transform="rotate(180 446 8)"
            fill="#C1EF00"
            className="opacity-0"
          />
        </svg>
      </div>
      <div
        className="flex items-center w-[6.4rem] sm:w-36 md:w-44 lg:w-52 xl:w-64 gap-1 lg:gap-2 "
        ref={fadeRef}
      >
        <div className="text-right">
          <h2 className="text-[0.624rem] sm:text-sm md:text-base text-whiteHigh">
            Eco-Friendly
          </h2>
          <p className="text-whiteHigh text-[0.43rem] sm:text-[0.624rem] md:text-xs ">
            Zero emissions, eco-friendly driving.
          </p>
        </div>
        <div className="shrink-0">
          <img src={eco} alt="feature" className="w-7 md:w-14 " />
        </div>
      </div>
    </div>
  );
}

export default BotttomLeftFeature;

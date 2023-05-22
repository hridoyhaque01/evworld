import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function CenterRightFeature({ image, title, texts }) {
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
    <div className="relative" ref={ref}>
      <div
        className="flex flex-row-reverse items-center gap-1 md:gap-2 w-16 sm:w-24 md:w-36 lg:w-44 xl:w-56 ml-auto duration-300 "
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <div>
          <h2 className="text-[0.5rem] sm:text-xs  xl:text-xl text-whiteHigh uppercase font-bold duration-300">
            {title}
          </h2>
          <p className="text-whiteHigh text-[0.43rem] sm:text-[0.624rem] md:text-xs text-justify duration-300">
            {texts}
          </p>
        </div>
        <div className="shrink-0 ">
          <img src={image} alt="feature" className="w-5 md:w-16 " />
        </div>
      </div>
      <div className="-mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20 ">
        <svg
          viewBox="0 0 376 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 duration-300"
          ref={svgRef}
        >
          <path
            d="M6.625 7.31464L105.824 102.734H375.999"
            stroke="#C1EF00"
            strokeWidth="2"
            className="opacity-0"
          />
          <ellipse
            cx="6.62555"
            cy="6.58067"
            rx="6.62555"
            ry="6.58067"
            transform="matrix(1 0 0 -1 0 13.896)"
            fill="#C1EF00"
            className="opacity-0"
          />
        </svg>
      </div>
    </div>
  );
}

export default CenterRightFeature;

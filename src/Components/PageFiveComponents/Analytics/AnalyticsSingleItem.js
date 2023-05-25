import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function AnalyticsSingleItem({ image, count, title, suffix }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      className="flex flex-col items-center bg-navySemi py-6 px-2 shadow-xl rounded-2xl"
      ref={ref}
    >
      <div className="">
        <img
          src={image}
          alt="analytics"
          className="w-10 h-10 md:w-28 xl:w-32 md:h-28 xl:h-32 bg-navyDark duration-300 rounded-full shadow-xl"
        />
      </div>
      {inView && (
        <CountUp
          start={0}
          end={count}
          duration={4}
          suffix={suffix}
          separator=""
          className="text-base md:text-2xl xl:text-5xl text-center font-clashSemi text-primaryColor uppercase mt-6 mb-1"
        ></CountUp>
      )}

      <p className="text-[10px] md:text-base xl:text-2xl  text-pureWhite capitalize text-center">
        {title}
      </p>
    </div>
  );
}

export default AnalyticsSingleItem;

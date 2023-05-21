import React from "react";
import CountUp from "react-countup";

function AnalyticsSingleItem({ image, count, title, suffix }) {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <img
          src={image}
          alt="analytics"
          className="w-14 h-14 md:w-28 xl:w-32 md:h-28 xl:h-32 duration-300"
        />
      </div>
      <CountUp
        start={0}
        end={count}
        duration={4}
        suffix={suffix}
        decimal=""
        separator=""
        className="text-base md:text-2xl xl:text-5xl text-center font-clashSemi text-blackHigh uppercase mt-6 mb-1"
      ></CountUp>
      <p className="text-[10px] md:text-base xl:text-2xl  text-blackHigh capitalize text-center">
        {title}
      </p>
    </div>
  );
}

export default AnalyticsSingleItem;

import React from "react";
import getRatings from "../../../utils/getRatings";
import Rating from "../Shared/Rating/Rating";

function Customer({ details }) {
  const { name, rating, description, image } = details || {};

  const stars = getRatings(rating);
  return (
    <div className="flex flex-col gap-3 p-4 lg:pt-16 lg:pb-10 lg:px-6 bg-pureWhite  duration-200 shadow-md relative">
      <div className="absolute -top-8">
        <img
          src={image}
          alt="customer"
          className="w-12 md:w-auto duration-300 ring-4 ring-whiteLow rounded-full"
        />
      </div>
      <div className="">
        <p className="text-xs md:text-xl text-blackMid mt-2 mb-4">
          {description}{" "}
        </p>
        <div className=" my-4 sm:my-6 border-t border-whiteMid"></div>
        <div className="flex justify-between">
          <div>
            <h4 className="text-sm md:text-2xl font-medium md:font-bold text-blackFadeDark">
              {name}
            </h4>
            <p className="text-primaryColor">Customer</p>
          </div>
          <div className="flex items-center gap-1">
            {stars?.map((star, i) => (
              <Rating filled={star} key={i}></Rating>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;

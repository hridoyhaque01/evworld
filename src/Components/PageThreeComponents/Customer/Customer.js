import React from "react";
import getRatings from "../../../utils/getRatings";
import Rating from "../Shared/Rating/Rating";

function Customer({ details }) {
  const { name, rating, description, image } = details || {};

  const stars = getRatings(rating);
  return (
    <div className="flex flex-col mx-auto max-w-3xl gap-3 p-10 bg-pureWhite rounded-3xl  duration-200 shadow-md relative">
      <div className="mb-4">
        <img
          src={image}
          alt="customer"
          className="w-12 md:w-auto mx-auto duration-300 ring-4 ring-whiteLow rounded-full"
        />
      </div>
      <div className="flex flex-col items-center">
        <h4 className="text-sm md:text-2xl font-medium md:font-bold text-blackFadeDark">
          {name}
        </h4>
        <p className="text-primaryColor mt-1 mb-6">Customer</p>
        <div className="flex items-center">
          {stars?.map((star, i) => (
            <Rating filled={star} key={i}></Rating>
          ))}
        </div>
        <div className="w-full border-t border-whiteMid my-6"></div>
        <p className="text-xs md:text-xl text-blackMid">{description}</p>
      </div>
    </div>
  );
}

export default Customer;
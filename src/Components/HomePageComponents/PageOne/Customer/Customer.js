import React from "react";
import getRatings from "../../../../utils/getRatings";
import Rating from "../../../Shared/Rating/Rating";

function Customer({ details }) {
  const { name, rating, description, image } = details || {};

  const stars = getRatings(rating);
  return (
    <div className="flex flex-col gap-3 p-4 lg:p-10 bg-navySemi rounded-2xl lg:rounded-3xl duration-200 ">
      <div>
        <img
          src={image}
          alt="customer"
          className="w-12 md:w-auto duration-300"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-1">
          {stars?.map((star, i) => (
            <Rating filled={star} key={i}></Rating>
          ))}
        </div>
        <p className="text-xs md:text-xl text-blackLow mt-2 mb-4">
          {description}{" "}
        </p>
        <h4 className="text-sm md:text-2xl font-medium md:font-bold text-whiteHigh">
          {name}
        </h4>
      </div>
    </div>
  );
}

export default Customer;

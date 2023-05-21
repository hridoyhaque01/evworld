import React from "react";
import getRatings from "../../../utils/getRatings";
import Rating from "../../Shared/Rating/Rating";

function Customer({ details }) {
  const { name, rating, description, image } = details || {};

  const stars = getRatings(rating);
  return (
    <div className="flex flex-col gap-3 p-4 bg-navySemi rounded-2xl duration-200 ">
      <div>
        <img src={image} alt="customer" />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-1">
          {stars?.map((star) => (
            <Rating filled={star}></Rating>
          ))}
        </div>
        <p className="text-xs text-whiteHigh mt-2 mb-4">{description} </p>
        <h4 className="text-sm font-medium text-whiteHigh">{name}</h4>
      </div>
    </div>
  );
}

export default Customer;

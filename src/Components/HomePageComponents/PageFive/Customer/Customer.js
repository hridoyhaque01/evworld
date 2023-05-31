import React from "react";
import getRatings from "../../../../utils/getRatings";

function Customer({ details }) {
  const { name, rating, description, image } = details || {};

  const stars = getRatings(rating);
  return (
    <div className="flex flex-col mx-auto gap-3 py-4 px-12 md:px-20 rounded-3xl duration-200 shadow-md relative">
      <div className="mb-2">
        <img
          src={image}
          alt="customer"
          className="w-12 md:w-auto mx-auto duration-300 ring-4 ring-whiteLow rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h4 className="text-sm md:text-2xl font-medium md:font-bold text-pureWhite">
          {name}
        </h4>

        <p className="text-xs md:text-xl text-pureWhite">{description}</p>
      </div>
    </div>
  );
}

export default Customer;

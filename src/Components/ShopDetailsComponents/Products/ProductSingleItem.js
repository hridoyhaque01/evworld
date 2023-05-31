import React from "react";
import { Link } from "react-router-dom";
import getRatings from "../../../utils/getRatings";
import Rating from "../../Shared/Rating/Rating";

function ProductSingleItem({ details }) {
  const { id, image, name, category, regular_price, discount_price, rating } =
    details || {};

  const stars = getRatings(rating);
  return (
    <Link
      to={`/shop-details/${id}`}
      className="block bg-navySemi rounded-3xl overflow-hidden text-pureWhite"
    >
      <div className="">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className=" py-6 px-4 ">
        <h2 className="text-xl md:text-base lg:text-xl">{name}</h2>
        <div className="flex items-center justify-between">
          <span className="text-base text-blackLow">{category}</span>
          <div className="flex items-center gap-1">
            {stars?.map((star, i) => (
              <Rating key={i} filled={star} width="w-4"></Rating>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between font-medium">
          <span className="line-through text-base md:text-xl ">
            ${regular_price}
          </span>
          <span className="text-base md:text-2xl text-primaryColor">
            {discount_price}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductSingleItem;

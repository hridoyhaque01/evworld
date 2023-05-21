import React from "react";

function ProductSingleItem({ image, title }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-6 xl:gap-10">
      <div className="flex items-center justify-center w-20 sm:w-36 md:w-44 lg:w-56 xl:w-72 h-20 sm:h-36 md:h-44 lg:h-56 xl:h-72 rounded-full bg-whiteHigh hover:bg-primaryColor hover:scale-125 lg:hover:translate-y-10 origin-center duration-300 peer p-6 overflow-hidden">
        <img src={image} alt="" className="" />
      </div>
      <p className="text-xs md:text-base xl:text-2xl  text-whiteHigh font-bold text-center duration-300 peer-hover:translate-y-2  lg:peer-hover:translate-y-16">
        {title}
      </p>
    </div>
  );
}

export default ProductSingleItem;

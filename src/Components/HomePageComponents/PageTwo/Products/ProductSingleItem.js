import React from "react";

function ProductSingleItem({ image, title }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-6 xl:gap-10">
      <div className="bg-pureWhite p-5 sm:p-6 lg:p-16 rounded-full hover:scale-110 md:hover:scale-125 hover:bg-primaryColor duration-300 shadow-md peer">
        <img src={image} alt="" className="" />
      </div>
      <p className="text-xs md:text-base xl:text-2xl text-navyDark font-bold text-center duration-300 peer-hover:translate-y-4 sm:peer-hover:translate-y-6">
        {title}
      </p>
    </div>
  );
}

export default ProductSingleItem;

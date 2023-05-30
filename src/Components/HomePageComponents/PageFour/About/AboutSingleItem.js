import React from "react";

function AboutSingleItem({ image, title, texts }) {
  return (
    <div className="text-center text-pureWhite bg-navySemi rounded-2xl duration-300 shadow-lg max-w-sm">
      <div className=" rounded-full">
        <img src={image} alt="about" className="w-full" />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-medium xl:text-2xl xl:font-bold">
          {title}
        </h4>
        <p className="text-xs mt-4">{texts}</p>
      </div>
    </div>
  );
}

export default AboutSingleItem;

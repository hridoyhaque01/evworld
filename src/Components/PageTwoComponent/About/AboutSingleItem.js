import React from "react";

function AboutSingleItem({ icon, title, texts }) {
  return (
    <div className="text-center text-navyDark  w-full p-6 md:p-0 rounded-2xl md:rounded-none duration-300">
      <div className="">
        <img
          src={icon}
          alt="about"
          className="mx-auto w-12 h-12 lg:w-16 lg:h-16"
        />
      </div>
      <h4 className="text-xs lg:text-base font-semibold uppercase mt-7 mb-3">
        {title}
      </h4>
      <p className="text-xs">{texts}</p>
    </div>
  );
}

export default AboutSingleItem;

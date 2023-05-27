import React from "react";

function AboutSingleItem({ icon, title, texts, children }) {
  return (
    <div className="text-center text-navyDark  w-full p-6 md:p-0 md:rounded-none duration-300 shadow-md md:shadow-transparent">
      <div className="w-20 h-20 lg:h-28 lg:w-28 flex justify-center items-center mx-auto bg-navyDark rounded-full">
        {children}
      </div>
      <h4 className="text-xs lg:text-base font-semibold uppercase mt-7 mb-3">
        {title}
      </h4>
      <p className="text-xs">{texts}</p>
    </div>
  );
}

export default AboutSingleItem;

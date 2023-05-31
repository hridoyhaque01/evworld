import React from "react";

function AboutSingleItem({ title, texts, children }) {
  return (
    <div className="text-center text-whiteHigh bg-navySemi w-full p-6 md:p-3 lg:p-6 rounded-2xl duration-300 hover:bg-primaryColor group">
      <div className="h-14 lg:h-16">{children}</div>
      <h4 className="text-xs lg:text-base font-semibold uppercase mt-7 mb-3 group-hover:text-blackFadeDark">
        {title}
      </h4>
      <p className="text-xs group-hover:text-blackMid">{texts}</p>
    </div>
  );
}

export default AboutSingleItem;

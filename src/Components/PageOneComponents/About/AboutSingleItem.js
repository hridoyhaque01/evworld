import React from "react";

function AboutSingleItem({ title, texts, children }) {
  return (
    <div className="text-center text-whiteHigh bg-navySemi w-full p-6 md:p-0 rounded-2xl md:rounded-none duration-300">
      <div className="h-14 lg:h-16">{children}</div>
      <h4 className="text-xs lg:text-base font-semibold uppercase mt-7 mb-3">
        {title}
      </h4>
      <p className="text-xs">{texts}</p>
    </div>
  );
}

export default AboutSingleItem;

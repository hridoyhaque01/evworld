import React from "react";

function AboutSingleItem({ title, texts, transform, children }) {
  return (
    <div
      className={`text-center text-pureWhite bg-navySemi duration-300 shadow-lg max-w-sm mx-auto p-4 md:p-6 xl:p-10 ${transform}`}
    >
      <div className="h-14 lg:h-16">{children}</div>
      <div className="mt-4">
        <h4 className="text-base leading-none font-semibold xl:text-2xl xl:font-bold uppercase">
          {title}
        </h4>
        <p className="text-xs mt-4">{texts}</p>
      </div>
    </div>
  );
}

export default AboutSingleItem;

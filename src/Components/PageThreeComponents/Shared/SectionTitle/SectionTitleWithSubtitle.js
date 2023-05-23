import React from "react";

const SectionTitleWithSubtitle = ({ title, subtitle }) => {
  return (
    <div className="md:max-w-6xl mx-auto flex flex-col justify-center text-center uppercase space-y-6">
      <h2 className="text-base md:text-2xl lg:text-3xl text-blackFadeDark font-clashSemi">
        {subtitle}
      </h2>
      <h1 className="text-base md:text-4xl lg:text-6xl text-navyDark font-clashBold">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitleWithSubtitle;

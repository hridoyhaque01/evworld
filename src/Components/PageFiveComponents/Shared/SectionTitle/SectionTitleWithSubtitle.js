import React from "react";

const SectionTitleWithSubtitle = ({ title, subtitle, texts }) => {
  return (
    <div className="md:max-w-6xl mx-auto flex flex-col justify-center text-center uppercase space-y-6">
      <h2 className="text-base md:text-2xl lg:text-3xl text-primaryColor font-clashSemi">
        {subtitle}
      </h2>
      <h1 className="text-base md:text-4xl lg:text-6xl text-pureWhite font-clashBold">
        {title}
      </h1>
      <p className="text-sm md:text-base lg:text-xl text-whiteHigh font-dmSans font-normal">
        {texts}
      </p>
    </div>
  );
};

export default SectionTitleWithSubtitle;

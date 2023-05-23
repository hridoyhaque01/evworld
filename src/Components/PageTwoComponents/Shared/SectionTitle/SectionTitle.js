import React from "react";

const SectionTitle = ({ title, texts }) => {
  return (
    <div className="md:max-w-6xl mx-auto flex flex-col justify-center text-center uppercase space-y-6">
      <h1 className="text-base md:text-4xl lg:text-6xl text-navySemi font-clashBold">
        {title}
      </h1>
      <p className="text-sm md:text-base lg:text-xl text-blackFadeDark font-dmSans font-normal">
        {texts}
      </p>
    </div>
  );
};

export default SectionTitle;

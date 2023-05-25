import React from "react";

function AboutSingleItem({ image, title, texts,transform }) {
  return (
    <div className={`text-center text-pureWhite bg-navySemi duration-300 shadow-lg max-w-sm mx-auto p-4 ${transform}`}>
      <div className="">
        <img src={image} alt="about" className="w-14 h-14 mx-auto" />
      </div>
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

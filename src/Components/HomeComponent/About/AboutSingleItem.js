import React from "react";

function AboutSingleItem({ icon, title, texts }) {
  return (
    <div className="text-center text-whiteHigh">
      <div className="">
        <img src={icon} alt="about" className="mx-auto w-16 h-16" />
      </div>
      <h4 className="text-base font-semibold uppercase mt-7 mb-3">{title}</h4>
      <p className="text-xs">{texts}</p>
    </div>
  );
}

export default AboutSingleItem;

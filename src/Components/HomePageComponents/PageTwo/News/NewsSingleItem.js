import React from "react";
import { Link } from "react-router-dom";

function NewsSingleItem({ details }) {
  const { title, texts, image } = details || {};
  return (
    <div>
      <div>
        <img src={image} alt="news" />
      </div>
      <div className="mt-6">
        <Link to="/" className="text-navyDark text-base font-bold">
          {title}
        </Link>
        <p className="text-sm text-blackFadeDark mt-2">{texts}</p>
      </div>
    </div>
  );
}

export default NewsSingleItem;

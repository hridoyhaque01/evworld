import React from "react";

export default function ProductItem({ imgClass, image, title }) {
  return (
    <div className="single-product d-flex flex-column align-items-center gap-y-3">
      <div
        className={`product-img d-flex align-items-center justify-content-center ${imgClass}`}
      >
        <img src={image} alt="product" />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

import React from "react";
export default function FeatureItem({
  extraClasses,
  title,
  text,
  img,
  children,
}) {
  return (
    <div className={`d-flex align-items-center  feature-item ${extraClasses} `}>
      <div className="feature-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="feature-img">
        <img src={img} alt="feature item" className="img-fluid" />
      </div>
      {children}
    </div>
  );
}

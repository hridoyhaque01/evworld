import React from "react";

export default function MisionItem({ icon, title, texts, classIcon }) {
  return (
    <div className="col-md-3 single-mision">
      <div className="single-misson--content">
        {/* img  */}
        <div className="msn-icon">
          <img src={icon} alt="misson icon" className="img-fluid" />
        </div>
        {/* text  */}
        <div className="msn-texts">
          <h2>{title}</h2>

          <p>{texts}</p>
        </div>

        {/* lines  */}
        <div className={`d-none d-md-block ${classIcon}`}></div>
      </div>
    </div>
  );
}

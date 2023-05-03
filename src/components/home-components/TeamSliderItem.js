import React from "react";

// icons

import { FaInstagram } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

export default function TeamSliderItem({
  image,
  name,
  LinkedinLink,
  position,
  instaLink,
}) {
  return (
    <div className="team-item">
      <div className="single-member">
        {/* img  */}
        <div>
          <img src={image} alt="team member" className="img-fluid" />
        </div>

        <div className="member-details text-center text-md-start">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-1 mb-md-3 gap-y-1">
            <h2>{name}</h2>
            <ul className="d-flex align-items-center gap-x-1">
              <li>
                <a href={LinkedinLink}>
                  <TfiLinkedin />
                </a>
              </li>
              <li>
                <a href={instaLink}>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
}

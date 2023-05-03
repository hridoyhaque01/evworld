import React from "react";
import CountUp from "react-countup";

export default function AnaLyticsItem({ inView, icon, value, suffix, name }) {
  return (
    <div className="col-3">
      {/* single counter  */}
      <div className="single-analytics d-flex flex-column align-items-center text-center">
        {/* icon  */}
        <div className="d-flex align-items-center justify-content-center analytics-icon">
          <img src={icon} alt="analytics icon" className="img-fluid" />
        </div>
        <div className="counter">
          <h2>
            {inView && (
              <CountUp
                start={0}
                end={value}
                duration={3}
                separator=" "
                suffix={` ${suffix}`}
              />
            )}
          </h2>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

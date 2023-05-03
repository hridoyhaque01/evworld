import React from "react";

export default function MIddleLeftSVG({ svgRef, inView }) {
  return (
    <>
      <div className="d-none d-xl-block">
        <svg
          width="376"
          height="103"
          viewBox="0 0 376 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path
            d="M369.375 6.58027L270.176 102H9.70364e-05"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <ellipse
            cx="369.374"
            cy="6.58086"
            rx="6.62555"
            ry="6.58067"
            transform="rotate(180 369.374 6.58086)"
            fill="#C1EF00"
          />
        </svg>
      </div>
      <div className="d-none d-md-block d-xl-none">
        <svg
          width="260"
          height="104"
          viewBox="0 0 260 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path
            d="M253.788 7.58027L185.631 103H0.00022316"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <circle
            cx="251.999"
            cy="8"
            r="8"
            transform="rotate(180 251.999 8)"
            fill="#C1EF00"
          />
        </svg>
      </div>
      <div className="d-block d-md-none">
        <svg
          width="125"
          height="29"
          viewBox="0 0 125 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path d="M120.631 4L88.4037 28H0.630741" stroke="#C1EF00" />
          <circle
            cx="120.631"
            cy="4"
            r="4"
            transform="rotate(180 120.631 4)"
            fill="#C1EF00"
          />
        </svg>
      </div>
    </>
  );
}

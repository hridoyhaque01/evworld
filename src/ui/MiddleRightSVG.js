import React from "react";

export default function MiddleRightSVG({ svgRef, inView }) {
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
            d="M6.62524 6.58027L105.824 102H376"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <ellipse
            cx="6.62555"
            cy="6.58067"
            rx="6.62555"
            ry="6.58067"
            transform="matrix(1 0 0 -1 0 13.1615)"
            fill="#C1EF00"
          />
        </svg>
      </div>
      <div className="d-none d-md-block d-xl-none">
        <svg
          width="261"
          height="104"
          viewBox="0 0 261 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path
            d="M7.21106 7.58027L75.3681 103H260.999"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(1 0 0 -1 0 16)"
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
          <path d="M4.83459 4L37.0069 28H124.631" stroke="#C1EF00" />
          <ellipse
            cx="3.99321"
            cy="4"
            rx="3.99321"
            ry="4"
            transform="matrix(1 0 0 -1 0.630859 8)"
            fill="#C1EF00"
          />
        </svg>
      </div>
    </>
  );
}

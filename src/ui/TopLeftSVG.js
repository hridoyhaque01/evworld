import React from "react";

export default function TopLeftSVG({ svgRef, inView }) {
  return (
    <>
      <div className="d-none d-xl-block">
        <svg
          ref={svgRef}
          width="445"
          height="121"
          viewBox="0 0 445 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path
            d="M433.229 113.258L316.882 1H6.34193e-05"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <ellipse
            cx="7.77093"
            cy="7.74194"
            rx="7.77093"
            ry="7.74194"
            transform="matrix(-1 0 0 1 441 105.516)"
            fill="#C1EF00"
          />
        </svg>
      </div>

      <div className="d-none d-md-block d-xl-none">
        <svg
          width="306"
          height="121"
          viewBox="0 0 306 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path
            d="M297.661 113.258L217.721 1H0.000100851"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(-1 0 0 1 305.292 105)"
            fill="#C1EF00"
          />
        </svg>
      </div>
      <div className="d-block d-md-none">
        <svg
          width="189"
          height="53"
          viewBox="0 0 189 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path d="M184 49L134.585 1H2.20537e-06" stroke="#C1EF00" />
          <circle
            cx="4"
            cy="4"
            r="4"
            transform="matrix(-1 0 0 1 188.025 45)"
            fill="#C1EF00"
          />
        </svg>
      </div>
    </>
  );
}

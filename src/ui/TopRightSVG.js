import React from "react";

export default function TopRightSVG({ svgRef, inView }) {
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
            d="M7.84131 113.258L125.244 1H445"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <ellipse
            cx="7.84141"
            cy="113.258"
            rx="7.84141"
            ry="7.74194"
            fill="#C1EF00"
          />
        </svg>
      </div>
      <div className="d-none d-md-block d-xl-none">
        <svg
          width="309"
          height="121"
          viewBox="0 0 309 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path
            d="M7.93286 113.258L88.5974 1H308.294"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <circle cx="8" cy="113" r="8" fill="#C1EF00" />
        </svg>
      </div>
      <div className="d-block d-md-none">
        <svg
          width="188"
          height="53"
          viewBox="0 0 188 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path d="M3.56372 49L52.9786 1H187.564" stroke="#C1EF00" />
          <circle cx="4.02539" cy="49" r="4" fill="#C1EF00" />
        </svg>
      </div>
    </>
  );
}

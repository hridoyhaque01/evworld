import React from "react";

export default function BottomLeftSVG({ svgRef, inView }) {
  return (
    <>
      <div className="d-none d-xl-block">
        <svg
          width="454"
          height="125"
          viewBox="0 0 454 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path
            d="M446 8L326.223 124H7.86781e-06"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <circle
            cx="446"
            cy="8"
            r="8"
            transform="rotate(180 446 8)"
            fill="#C1EF00"
          />
        </svg>
      </div>
      <div className="d-none d-md-block d-xl-none">
        <svg
          width="313"
          height="119"
          viewBox="0 0 313 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path
            d="M306.435 2L224.139 118H-7.00951e-05"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <circle
            cx="304.932"
            cy="8"
            r="8"
            transform="rotate(180 304.932 8)"
            fill="#C1EF00"
          />
        </svg>
      </div>
      <div className="d-block d-md-none">
        <svg
          width="187"
          height="53"
          viewBox="0 0 187 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={inView ? "d-lg-block animate-svg" : "d-lg-block"}
        >
          <path d="M184 4.01367L134.585 52.0137H3.8147e-06" stroke="#C1EF00" />
          <circle
            cx="183"
            cy="4.01367"
            r="4"
            transform="rotate(180 183 4.01367)"
            fill="#C1EF00"
          />
        </svg>
      </div>
    </>
  );
}

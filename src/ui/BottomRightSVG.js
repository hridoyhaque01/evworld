import React from "react";

export default function BottomRightSVG({ svgRef, inView }) {
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
          <path d="M8 8L127.777 124H454" stroke="#C1EF00" strokeWidth="2" />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(1 0 0 -1 0 16)"
            fill="#C1EF00"
          />
        </svg>
      </div>
      <div className="d-none d-md-block d-xl-none">
        <svg
          width="312"
          height="119"
          viewBox="0 0 312 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.26636 2L87.5623 118H311.702"
            stroke="#C1EF00"
            strokeWidth="2"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(1 0 0 -1 0.769775 16)"
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
          <path d="M4.2041 4.01367L53.6189 52.0137H188.204" stroke="#C1EF00" />
          <ellipse
            cx="4"
            cy="4.0068"
            rx="4"
            ry="4.0068"
            transform="matrix(1 0 0 -1 0 8.01367)"
            fill="#C1EF00"
          />
        </svg>
      </div>
    </>
  );
}

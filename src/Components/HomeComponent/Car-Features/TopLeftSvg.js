import React from "react";

function TopLeftSvg({ svgRef, ...rest }) {
  console.log(svgRef);
  return (
    <div className="mt-4">
      <svg
        width="441"
        height="121"
        viewBox="0 0 441 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
      >
        <path
          d="M433.229 113.258L316.881 1H-0.000546932"
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
  );
}

export default TopLeftSvg;

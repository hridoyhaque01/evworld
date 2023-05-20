import React from "react";

function BottomRightSvg({ ...rest }) {
  return (
    <div {...rest}>
      <svg
        width="454"
        height="125"
        viewBox="0 0 454 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-svg"
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
  );
}

export default BottomRightSvg;

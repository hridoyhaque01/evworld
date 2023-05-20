import React from "react";

function CenterLeftSvg({ ...rest }) {
  return (
    <div {...rest}>
      <svg
        width="376"
        height="104"
        viewBox="0 0 376 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-svg"
      >
        <path
          d="M369.375 7.31464L270.176 102.734H0.000585318"
          stroke="#C1EF00"
          strokeWidth="2"
        />
        <ellipse
          cx="369.374"
          cy="7.31532"
          rx="6.62555"
          ry="6.58067"
          transform="rotate(180 369.374 7.31532)"
          fill="#C1EF00"
        />
      </svg>
    </div>
  );
}

export default CenterLeftSvg;

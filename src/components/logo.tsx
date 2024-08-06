import React from "react";
import { TbLetterASmall } from "react-icons/tb";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="A" transform="translate(37.000000, 35.000000)">
          <svg width="500" height="500">
            {" "}
            <path
              fill="#1abc9c"
              d="M12 2L3 22h6l1-4h4l1 4h6L12 2zM10.25 16l1.75-7l1.75 7h-3.5z"
              width="500"
              height="500"
            />
          </svg>
        </g>
        <path
          stroke="#1abc9c"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;

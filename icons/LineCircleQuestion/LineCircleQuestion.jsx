/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const LineCircleQuestion = ({ className }) => {
  return (
    <svg
      className={`line-circle-question ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 21.2999C17.1363 21.2999 21.3 17.1362 21.3 12C21.3 6.8637 17.1363 2.69995 12 2.69995C6.86376 2.69995 2.70001 6.8637 2.70001 12C2.70001 17.1362 6.86376 21.2999 12 21.2999Z"
        stroke="#141414"
        strokeWidth="1.4"
      />
      <path
        className="path"
        d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"
        fill="#141414"
      />
      <path
        className="path"
        d="M9.50001 9.34766C9.42189 8.41016 9.9844 6.72266 12 6.72266C14.1563 6.72266 14.7263 8.69826 14.461 9.59375C14.2599 10.2724 13.4528 11.0444 12.711 11.8789C11.9798 12.7015 12 13.2757 12 13.832"
        stroke="#141414"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
};

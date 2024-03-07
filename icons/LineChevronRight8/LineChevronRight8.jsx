/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineChevronRight8 = ({ color = "#7D7D7D", className }) => {
  return (
    <svg
      className={`line-chevron-right-8 ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.65674 2.83325L11.3136 8.49011L5.65674 14.147"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.2"
      />
    </svg>
  );
};

LineChevronRight8.propTypes = {
  color: PropTypes.string,
};

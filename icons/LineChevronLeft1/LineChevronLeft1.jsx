/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineChevronLeft1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`line-chevron-left-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.4853 3.5L7 11.9853L15.4853 20.4706"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  );
};

LineChevronLeft1.propTypes = {
  color: PropTypes.string,
};

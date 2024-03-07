/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineChevronDown1 = ({ color = "black", opacity = "unset", className }) => {
  return (
    <svg
      className={`line-chevron-down-1 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.941 4.94971L6.99125 9.89945L2.0415 4.94971"
        stroke={color}
        strokeLinecap="round"
        strokeOpacity={opacity}
        strokeWidth="1.2"
      />
    </svg>
  );
};

LineChevronDown1.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};

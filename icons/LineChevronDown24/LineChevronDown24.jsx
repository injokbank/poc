/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineChevronDown24 = ({ color = "#141414", opacity = "unset", className }) => {
  return (
    <svg
      className={`line-chevron-down-24 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M20.4706 8.48535L11.9853 16.9706L3.5 8.48535"
        stroke={color}
        strokeLinecap="round"
        strokeOpacity={opacity}
        strokeWidth="1.4"
      />
    </svg>
  );
};

LineChevronDown24.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};

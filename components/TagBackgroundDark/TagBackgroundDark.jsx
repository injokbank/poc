/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";


export const TagBackgroundDark = ({ txt = "#txt", className }) => {
  return (
    <div className={`tag-background-lime ${className}`}>
      <div className="text-wrapper">{txt}</div>
    </div>
  );
};

TagBackgroundDark.propTypes = {
  txt: PropTypes.string,
};

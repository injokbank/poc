import PropTypes from "prop-types";
import React from "react";

export const Content = ({ 
  txt = "#txt", descTxt = "#desc_txt", comp, size, className, divClassName 
}:any) => {
  return (
    <div className={`content comp-${comp} ${className}`}>
      {["desc-txt-link", "desc-txt"].includes(comp) && (
        <>
          <div className={`div ${size}`}>{txt}</div>
          <div className={`desc-txt comp-0-${comp} size-${size}`}>{descTxt}</div>
        </>
      )}

      {comp === "txt" && <div className={`txt-2 size-0-${size} ${divClassName}`}>{txt}</div>}
    </div>
  );
};

Content.propTypes = {
  txt: PropTypes.string,
  descTxt: PropTypes.string,
  comp: PropTypes.oneOf(["txt", "desc-txt", "desc-txt-link"]),
  size: PropTypes.oneOf(["medium", "small"]),
};

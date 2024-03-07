/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SolidCall1 } from "@/icons/SolidCall1";
import { SolidCall25 } from "@/icons/SolidCall25";

export const Solid = ({
  btnTxt = "#btn_txt",
  bg,
  grade,
  showIco,
  size,
  state,
  className,
  elementBtnIcoTxtClassName,
}) => {
  return (
    <div className={`solid ${showIco} size-1-${size} state-2-${state} grade-3-${grade} ${bg} ${className}`}>
      <div className={`btn-txt-4 ${elementBtnIcoTxtClassName}`}>
        {showIco === "off" && <>{btnTxt}</>}

        {showIco === "right" && <div className="btn-txt-5">{btnTxt}</div>}

        {size === "small" && ["left", "right"].includes(showIco) && (
          <SolidCall25
            className="solid-call"
            color={
              bg === "nega"
                ? "white"
                : state === "default" && bg === "posi"
                ? "#17008C"
                : state === "disabled"
                ? "#B8B8B8"
                : undefined
            }
          />
        )}

        {((showIco === "left" && size === "large") ||
          (showIco === "left" && size === "medium") ||
          (showIco === "right" && size === "large") ||
          (showIco === "right" && size === "medium")) && (
          <SolidCall1
            className="solid-call-1"
            color={
              state === "default" && bg === "posi"
                ? "#17008C"
                : state === "disabled"
                ? "#B8B8B8"
                : bg === "nega"
                ? "white"
                : undefined
            }
          />
        )}

        {showIco === "left" && <div className="btn-txt-6">{btnTxt}</div>}
      </div>
    </div>
  );
};

Solid.propTypes = {
  btnTxt: PropTypes.string,
  bg: PropTypes.oneOf(["nega", "posi"]),
  grade: PropTypes.oneOf(["ter", "sec", "pri"]),
  showIco: PropTypes.oneOf(["off", "right", "left"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  state: PropTypes.oneOf(["disabled", "default"]),
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LineChevronRight6 } from "@/icons/LineChevronRight6";
import { LineChevronRight8 } from "@/icons/LineChevronRight8";

export const Txt = ({
  showPressed = false,
  btnTxt = "#btn_txt",
  showBtnTxt = true,
  grade,
  level,
  showIco,
  showUnderline,
  showPadding,
  state,
  className,
  divClassName,
  underlineClassName,
}) => {
  return (
    <div className={`txt ${showPadding} ${grade} ${className}`}>
      {((grade === "pri" && showIco === "off") ||
        (grade === "sec" && level === "one" && showIco === "on" && showPadding === "on" && state === "default") ||
        (grade === "sec" && showIco === "off") ||
        (grade === "ter" && level === "one" && state === "default") ||
        (grade === "ter" && level === "two" && showIco === "off" && state === "default") ||
        (grade === "ter" && showIco === "off" && state === "disabled")) && (
        <div
          className={`contents show-ico-${showIco} show-underline-${showUnderline} grade-${grade} ${state} level-3-${level}`}
        >
          {showUnderline === "on" && (
            <>
              <div className={`btn-txt ${state === "default" ? divClassName : undefined}`}>{btnTxt}</div>
              <div className={`underline ${state === "default" ? underlineClassName : undefined}`} />
            </>
          )}

          {showIco === "off" && showUnderline === "off" && <>{btnTxt}</>}

          {showIco === "on" && (
            <>
              <>{showBtnTxt && <div className={`btn-txt-2 ${divClassName}`}>{btnTxt}</div>}</>
              <LineChevronRight6 className="line-chevron-right" />
            </>
          )}
        </div>
      )}

      {((grade === "pri" && showIco === "on") ||
        (grade === "sec" && level === "one" && showIco === "on" && showPadding === "off" && state === "default") ||
        (grade === "sec" && level === "two" && showIco === "on" && state === "default") ||
        (grade === "sec" && showIco === "on" && state === "disabled") ||
        (grade === "ter" && level === "one" && showIco === "on" && showPadding === "off" && state === "disabled") ||
        (grade === "ter" && level === "two" && showIco === "on" && showPadding === "off") ||
        (grade === "ter" && level === "two" && showIco === "on" && showPadding === "on" && state === "default") ||
        (grade === "ter" && showIco === "on" && showPadding === "on" && state === "disabled")) && (
        <>
          <>
            {showBtnTxt && (
              <div className={`btn-txt-3 grade-2-${grade} state-1-${state} level-6-${level}`}>{btnTxt}</div>
            )}
          </>
        </>
      )}

      {((grade === "pri" && showIco === "on") ||
        (grade === "sec" && level === "one" && showIco === "on" && state === "disabled") ||
        (grade === "sec" && level === "two" && showIco === "on") ||
        (grade === "ter" && level === "one" && showIco === "on" && state === "disabled") ||
        (grade === "ter" && level === "two" && showIco === "on")) && (
        <LineChevronRight8
          className="line-chevron-right"
          color={state === "disabled" ? "#B8B8B8" : level === "one" && state === "default" ? "#141414" : "#7D7D7D"}
        />
      )}

      {state === "default" && showIco === "on" && showPadding === "off" && level === "one" && grade === "sec" && (
        <LineChevronRight6 className="line-chevron-right" />
      )}
    </div>
  );
};

Txt.propTypes = {
  showPressed: PropTypes.bool,
  btnTxt: PropTypes.string,
  showBtnTxt: PropTypes.bool,
  grade: PropTypes.oneOf(["ter", "sec", "pri"]),
  level: PropTypes.oneOf(["two", "one"]),
  showIco: PropTypes.oneOf(["off", "on"]),
  showUnderline: PropTypes.oneOf(["off", "on"]),
  showPadding: PropTypes.oneOf(["off", "on"]),
  state: PropTypes.oneOf(["default", "disabled"]),
};

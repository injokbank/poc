/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Content } from "../Content";
import { Txt } from "../Txt";

export const Info = ({
  showTitleTxt = true,
  showContent = true,
  titleTxt = "#title_txt",
  showIco = false,
  showTooltip = false,
  level,
  comp,
  className,
  divClassName,
  contentDivClassName,
}) => {
  return (
    <div className={`info ${level} comp-1-${comp} ${className}`}>
      {["btn", "txt"].includes(comp) && (
        <div className="text">
          {(comp === "btn" || level === "two") && <div className={`title-txt ${divClassName}`}>{titleTxt}</div>}

          {level === "one" && comp === "txt" && (
            <>
              <>{showTitleTxt && <div className="title-txt-2">{titleTxt}</div>}</>
            </>
          )}
        </div>
      )}

      {comp === "txt" && (
        <>
          <>
            {showContent && (
              <Content
                className={`${level === "two" ? "class" : "class-2"}`}
                comp="txt"
                divClassName={
                  level === "two"
                    ? contentDivClassName
                    : {
                        flex: "1",
                        textAlign: "right",
                        whiteSpace: "unset",
                        width: "unset",
                      }
                }
                size={level === "two" ? "small" : "medium"}
                txt="#txt"
              />
            )}
          </>
        </>
      )}

      {comp === "btn" && (
        <Txt
          btnTxt="#btn_txt"
          className="txt-instance"
          grade={level === "one" ? "sec" : "ter"}
          level="one"
          showIco="on"
          showPadding="off"
          showUnderline="off"
          state="default"
        />
      )}

      {comp === "card" && (
        <div className="text-2">
          <div className="img">
            <div className="card-logo">
              <div className="group" />
            </div>
          </div>
          <div className="frame">
            <div className="title-txt-3">{titleTxt}</div>
          </div>
          {showContent && (
            <Content
              className={`${level === "two" ? "class" : "class-2"}`}
              comp="txt"
              divClassName="content-instance"
              size={level === "two" ? "small" : "medium"}
              txt="#txt"
            />
          )}
        </div>
      )}
    </div>
  );
};

Info.propTypes = {
  showTitleTxt: PropTypes.bool,
  showContent: PropTypes.bool,
  titleTxt: PropTypes.string,
  showIco: PropTypes.bool,
  showTooltip: PropTypes.bool,
  level: PropTypes.oneOf(["two", "one"]),
  comp: PropTypes.oneOf(["txt", "card", "btn"]),
};

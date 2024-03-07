import PropTypes from "prop-types";
import React from "react";
import { Solid } from "../Solid";
import styles from './styles.module.css';

export const Ctrl = ({
  children,
  showSecBtn = false,
  horiResizing,
  className,
  solidBg = "posi",
  solidBtnTxt = "#btn_txt",
  solidGrade = "pri",
}) => {
  console.log(`Ctrl props children ` + children )
  return (
    <div className={[styles[`ctrl`], styles[`${horiResizing}`], styles[`${className}`]].join(" ")}>
    <div className={`ctrl ${horiResizing} ${className}`}>
      {
        React.Children.map(children,(child) => 
        child ? child : null        
      )}
      {/* <Solid
        bg={horiResizing === "fill" ? solidBg : "posi"}
        btnTxt={horiResizing === "fill" ? solidBtnTxt : "#btn_txt"}
        className={`${horiResizing === "fixed" && "class-4"} ${horiResizing === "fill" && "class-5"}`}
        elementBtnIcoTxtClassName={`${horiResizing === "fixed" && "class-3"}`}
        grade={horiResizing === "fill" ? solidGrade : "pri"}
        showIco="off"
        size="medium"
        state="default"
      />
      <Solid
        bg={'posisdfsdfsdf'}
        btnTxt={horiResizing === "fill" ? solidBtnTxt : "#btn_txt"}
        className={`${horiResizing === "fixed" && "class-4"} ${horiResizing === "fill" && "class-5"}`}
        elementBtnIcoTxtClassName={`${horiResizing === "fixed" && "class-3"}`}
        grade={horiResizing === "fill" ? solidGrade : "pri"}
        showIco="off"
        size="medium"
        state="default"
      /> */}
      </div>
    </div>
  );
};

Ctrl.propTypes = {
  showSecBtn: PropTypes.bool,
  horiResizing: PropTypes.oneOf(["fill", "hug", "fixed"]),
  solidBg: PropTypes.string,
  solidBtnTxt: PropTypes.string,
  solidGrade: PropTypes.string,
  children:PropTypes.node,
};

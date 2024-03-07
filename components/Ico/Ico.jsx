import PropTypes from "prop-types";
import React from "react";
import { LineChevronDown24 } from "../../icons/LineChevronDown24";
import styles from './styles.module.css';
export const Ico = ({
  shape,
  size,
  state,
  icon = <LineChevronDown24 className="line-chevron-down" color="#141414" />,
}) => {
  return <div className={[styles[`ico`], styles[`${size}`], styles[`${shape}`], styles[`${state}`]].join(" ")}>{icon}</div>;
};

Ico.propTypes = {
  shape: PropTypes.oneOf(["solid", "transparent", "stroke"]),
  size: PropTypes.oneOf(["large", "x-small", "xx-small", "small", "xxx-small", "medium"]),
  state: PropTypes.oneOf(["disabled", "default"]),
};

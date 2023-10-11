import React from "react";
import styles from "./CustomInput.module.scss";
import classNamesBind from "classnames/bind";
const CustomInput = ({ onInput, error, ...props }) => {
  let classNames = classNamesBind.bind(styles);
  return (
    <input
      type="text"
      className={classNames("input", { error: error })}
      onInput={(event) => {
        onInput(event.target.value);
      }}
      {...props}
    />
  );
};

export default CustomInput;

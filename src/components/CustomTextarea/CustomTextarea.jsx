import React from "react";
import styles from "./CustomTextarea.module.scss";

const CustomTextarea = ({ onInput, ...props }) => {
  return (
    <textarea
      className={styles.textarea}
      onInput={(event) => {
        onInput(event.target.value);
      }}
      {...props}
    ></textarea>
  );
};

export default CustomTextarea;

import React from "react";
import styles from "./CustomButton.module.scss";

const CustomButton = ({ children, ...props }) => {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;

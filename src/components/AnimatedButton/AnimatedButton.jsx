import React from "react";
import styles from "./AnimatedButton.module.scss";
const AnimatedButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} type="button" {...props}>
      {children}
    </button>
  );
};

export default AnimatedButton;

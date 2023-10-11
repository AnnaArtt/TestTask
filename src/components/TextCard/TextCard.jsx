import React from "react";
import styles from "./TextCard.module.scss";
import classNamesBind from "classnames/bind";

const TextCard = ({ title, children }) => {
  let classNames = classNamesBind.bind(styles);
  return (
    <div className={styles.card}>
      <div className={classNames("wrapperTitle", "wrapper")}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={classNames("wrapperText")}>
        <div className={classNames("wrapperText2", "wrapper")}>
          <div className={styles.text}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default TextCard;

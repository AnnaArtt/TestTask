import React, { useState } from "react";
import styles from "./InformationBlock.module.scss";
import arrow from "../../assets/arrow-.png";
import classNamesBind from "classnames/bind";

const InformationBlock = ({ title, text }) => {
  let classNames = classNamesBind.bind(styles);
  const [onlyTitle, setOnlyTitle] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperTitle}>
        <h3 className={styles.title}>{title}</h3>
        <img
          src={arrow}
          alt=""
          className={classNames("arrow", { arrowRotate: onlyTitle })}
          onClick={() => {
            setOnlyTitle(!onlyTitle);
          }}
        />
      </div>
      <p className={classNames("text", { displayNone: onlyTitle })}>{text}</p>
    </div>
  );
};

export default InformationBlock;

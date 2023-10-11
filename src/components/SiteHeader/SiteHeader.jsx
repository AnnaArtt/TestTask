import React from "react";
import styles from "./SiteHeader.module.scss";
import logo from "../../assets/vnv_logo.png";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} className={styles.logo_img} alt="" />
        <h2 className="title"></h2>
      </div>
      <AnimatedButton>Замовити</AnimatedButton>
    </header>
  );
};

export default SiteHeader;

import React, { useState } from "react";
import styles from "./GetDiscount.module.scss";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const GetDiscount = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        Отримай знижку всього за декілька кліків!
      </h3>
      <AnimatedButton>Отримати</AnimatedButton>
    </div>
  );
};

export default GetDiscount;

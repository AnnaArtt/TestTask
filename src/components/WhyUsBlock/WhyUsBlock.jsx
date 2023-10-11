import React, { useEffect } from "react";
import styles from "./WhyUsBlock.module.scss";
import CardList from "../CardList/CardList";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
const WhyUsBlock = () => {
  const reasonsArray = [
    "Разом із сайтом ви отримуєте готовий фундамент для просування в інтернеті завдяки SEO та аналітиці",
    "Разом із сайтом ви отримуєте готовий фундамент для просування в інтернеті завдяки SEO та аналітиці",
    "Разом із сайтом ви отримуєте готовий фундамент для просування в інтернеті завдяки SEO та аналітиці",
    "Разом із сайтом ви отримуєте готовий фундамент для просування в інтернеті завдяки SEO та аналітиці",
    "Разом із сайтом ви отримуєте готовий фундамент для просування в інтернеті завдяки SEO та аналітиці",
    "Разом із сайтом ви отримуєте готовий фундамент для просування в інтернеті завдяки SEO та аналітиці",
  ];
  return (
    <section className={styles.whyUsBlock}>
      <h2 className={styles.sectionName}>Чому ми!</h2>
      <CardList list={reasonsArray} />
      <AnimatedButton>Замовити</AnimatedButton>
    </section>
  );
};

export default WhyUsBlock;

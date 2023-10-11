import React from "react";
import styles from "./BriefInformation.module.scss";
import CustomButton from "../CustomButton/CustomButton";
import ScrollObserver from "../ScrollObserver/ScrollObserver";
const BriefInformation = () => {
  return (
    <ScrollObserver>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Заповнення брифу</h2>
        <p className={styles.text}>
          Бриф - це ключовий інструмент для успішного старту проекту. Він є
          паспортом вашої ідеї або завдання і містить усю необхідну інформацію
          для того, щоб виконавець розумів ваші потреби і очікування. Цей
          документ допомагає уникнути недорозумінь та забезпечує ефективну
          комунікацію між всіма учасниками проекту. Кнопка "Заповнити зараз"
          надає вам можливість швидко і легко розпочати процес створення брифу,
          додаючи всю необхідну інформацію та визначаючи основні параметри.
          Давайте розпочнемо створення брифу прямо зараз!
        </p>
        <CustomButton>Заповнити зараз</CustomButton>
      </section>
    </ScrollObserver>
  );
};

export default BriefInformation;

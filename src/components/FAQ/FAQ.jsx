import React from "react";
import styles from "./FAQ.module.scss";
import InformationBlock from "../InformationBlock/InformationBlock";

const FAQ = () => {
  const faqArray = [
    {
      question: "Перше запитання?",
      answer:
        "Відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь",
    },
    {
      question: "Друге запитання?",
      answer:
        "Відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь",
    },
    {
      question: "Третє запитання?",
      answer:
        "Відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь відповідь",
    },
  ];
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>FAQ</h2>
      <div className={styles.wrapperInfo}>
        {faqArray.map((item, index) => (
          <InformationBlock
            key={index}
            title={item.question}
            text={item.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;

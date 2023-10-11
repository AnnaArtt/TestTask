import React from "react";
import styles from "./CardList.module.scss";
import TextCard from "../TextCard/TextCard";

const CardList = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map((item, index) => (
        <TextCard key={index} title={++index}>
          <div className={styles.listWrapper}>{item}</div>
        </TextCard>
      ))}
    </div>
  );
};

export default CardList;

import React, { useEffect, useState, useRef } from "react";
import styles from "./MainTitle.module.scss";

const MainTitle = () => {
  const fullSlogan = "Easy, quality, IT - winning solutions for your business";
  const [currentSlogan, setCurrentSlogan] = useState("");
  const currentSloganRef = useRef("");

  useEffect(() => {
    console.log("render main");
    outSlogan();
  }, []);

  function outSlogan() {
    console.log("Мене запустили");
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentSloganRef.current += fullSlogan[currentIndex];
      currentIndex++;
      setCurrentSlogan(currentSloganRef.current);
      if (currentIndex === fullSlogan.length) {
        clearInterval(intervalId);
      }
    }, 100);
  }

  return (
    <section className={styles.mainTitle}>
      <h1 className={styles.slogan}>
        {currentSlogan}
        <span className={styles.type}>|</span>
      </h1>
    </section>
  );
};

export default MainTitle;

import React from "react";
import Carousel from "react-material-ui-carousel";
import styles from "./OurProjects.module.scss";

const OurProjects = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Наші проекти</h2>
      <Carousel swipe={true}>
        <div className={styles.carousel}>
          <img
            onClick={(e) => e.preventDefault()}
            src="https://st2.depositphotos.com/1607243/12149/i/600/depositphotos_121494524-stock-photo-responsive-website-design-on-screens.jpg"
          />
        </div>
        <div className={styles.carousel}>
          <img
            onClick={(e) => e.preventDefault()}
            src="https://st2.depositphotos.com/1607243/10716/i/600/depositphotos_107163326-stock-photo-devices-responsive-on-workspace-fashion.jpg"
          />
        </div>
        <div className={styles.carousel}>
          <img
            onClick={(e) => e.preventDefault()}
            src="https://st2.depositphotos.com/1607243/11313/i/600/depositphotos_113133554-stock-photo-digital-generated-devices-on-desktop.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default OurProjects;

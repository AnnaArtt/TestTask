import React from "react";
import styles from "./SocialMediaIcon.module.scss";

const SocialMediaIcon = ({ img, socialMediaName, href }) => {
  return (
    <a className={styles.socialMediaBlock} href={href} target="_blank">
      <div className={styles.wrapper}>
        <img src={img} alt="" className={styles.img} />
      </div>
      <h3 className={styles.socialMediaName}>{socialMediaName}</h3>
    </a>
  );
};

export default SocialMediaIcon;

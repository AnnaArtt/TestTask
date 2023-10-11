import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./CompanyServicesContentBlock.module.scss";
import Loader from "../Loader/Loader";

const CompanyServicesContentBlock = ({ serviceName, img, children }) => {
  const [imgLoading, setImgLoading] = useState(true);

  function onLoad() {
    setImgLoading(true);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <h3 className={styles.title}>{serviceName}</h3>
        <p className={styles.textContent}>{children}</p>
        <CustomButton>Хочу</CustomButton>
      </div>
      <div className={styles.imgWrapper}>
        <img src={img} alt="" className={styles.img} onLoad={onLoad} />
        {imgLoading ? <Loader /> : ""}
      </div>
    </div>
  );
};

export default CompanyServicesContentBlock;

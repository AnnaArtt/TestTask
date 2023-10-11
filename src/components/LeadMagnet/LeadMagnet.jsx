import React, { useState, useEffect } from "react";
import CustomModal from "../CustomModal/CustomModal";
import styles from "./LeadMagnet.module.scss";

const LeadMagnet = ({ img, children }) => {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisibility(true);
    }, 5000);
  }, []);
  return (
    <>
      <div
        className={styles.wrapperImg}
        onClick={() => setVisibility(!visibility)}
      >
        <img src={img} alt="" className={styles.img} />
      </div>
      <CustomModal visible={visibility} setVisible={setVisibility}>
        {children}
      </CustomModal>
    </>
  );
};

export default LeadMagnet;

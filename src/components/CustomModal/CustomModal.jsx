import React from "react";
import styles from "../CustomModal/CustomModal.module.scss";

const CustomModal = ({ children, visible, setVisible }) => {
  return (
    <div className={visible ? styles.wrapper : styles.notWrapper}>
      <div className={styles.modal}>
        <div
          className={styles.closeModal}
          onClick={() => setVisible(false)}
        ></div>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;

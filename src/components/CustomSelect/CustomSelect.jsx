import React from "react";
import styles from "./CustomSelect.module.scss";

const CustomSelect = ({ options, onChange }) => {
  return (
    <select
      className={styles.select}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;

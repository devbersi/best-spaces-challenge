import React from "react";
import styles from "./styles.module.scss";

interface SelectProps {
  text: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Select = ({ text, isChecked, onChange }: SelectProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className={styles.customSelect}>
      <input
        type="checkbox"
        id="select-checkbox"
        checked={isChecked}
        onChange={handleInputChange}
      />
      <label htmlFor="select-checkbox">{text}</label>
    </div>
  );
};

export default Select;

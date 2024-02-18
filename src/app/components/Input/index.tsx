import React from "react";
import styles from "./styles.module.scss";

interface InputProps {
  placeholder: string;
  value: string;
  width: string;
  onChange: (value: string) => void;
}

const Input = ({ placeholder, value, width, onChange }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      value={value}
      style={{ width: width, height: "12px" }}
      onChange={handleInputChange}
    />
  );
};

export default Input;

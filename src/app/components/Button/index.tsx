import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  title: string;
  variant: "outlined" | "primary";
  onClick: () => void;
}

const Button = ({ title, variant, onClick }: ButtonProps) => {
  return (
    <button
      className={
        variant === "outlined" ? styles.buttonOutlined : styles.buttonPrimary
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

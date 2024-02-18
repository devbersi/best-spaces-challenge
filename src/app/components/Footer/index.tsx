import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.copyrightContainer}>
        <span className={styles.copyrightText}>@2024 Copyright: devbersi</span>
      </div>
    </div>
  );
};

export default Footer;

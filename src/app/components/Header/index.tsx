import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoImage from "@/assets/images/best-space-logo.png";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Image src={logoImage} alt="logo" width={140} height={100} />
      <p className={styles.titleHeader}>Best-Spaces</p>
      <div className={styles.fillerContainer}></div>
    </div>
  );
};

export default Header;

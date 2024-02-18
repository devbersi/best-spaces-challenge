import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface HeroSectionProps {
  title: string;
  description: string;
  button?: ReactNode;
}

const HeroSection = ({ title, description, button }: HeroSectionProps) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.upperSideContainer}>
        <h2 className={styles.titleHero}>{title}</h2>
        <p className={styles.descriptionHero}>{description}</p>
      </div>
      {button && button}
    </div>
  );
};

export default HeroSection;

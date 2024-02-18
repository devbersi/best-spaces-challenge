"use client";

import React from "react";
import styles from "./styles/home.module.scss";
import HeroSection from "@/app/components/HeroSection";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.homeContainer}>
      <HeroSection
        title="Rent a House of your dreams"
        button={
          <Button
            onClick={() => router.push("/form")}
            title="Next Screen"
            variant="primary"
          />
        }
        description="Here you can find your dreams house and can get schedule a visit for see her, just click on the button bellow"
      />
    </div>
  );
};

export default Home;

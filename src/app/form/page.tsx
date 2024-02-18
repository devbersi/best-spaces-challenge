"use client";

import React, { useState } from "react";
import styles from "../styles/form.module.scss";
import Select from "../components/Select";
import Input from "../components/Input";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [isFirstHouse, setIsFirstHouse] = useState(false);
  const [isSingle, setIsSingle] = useState(false);
  const [agree, setAgree] = useState(false);

  const onSubmit = () => {
    console.log({
      location: location,
      isFirstHouse: isFirstHouse,
      isSingle: isSingle,
      agree: agree,
    });
    router.push("/list");
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.formTitle}>Form</p>
      </div>

      <div className={styles.insideFormContainer}>
        <div className={styles.formContent}>
          <Input
            onChange={(value) => setLocation(value)}
            value={location}
            placeholder="Where you living"
            width="90%"
          />
          <div className={styles.selectsContainer}>
            <Select
              isChecked={isFirstHouse}
              onChange={(checked) => setIsFirstHouse(checked)}
              text="Is your first house"
            />
            <Select
              isChecked={isSingle}
              onChange={(checked) => setIsSingle(checked)}
              text="Are you single"
            />
            <Select
              isChecked={agree}
              onChange={(checked) => setAgree(checked)}
              text="You agree with this Form"
            />
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <Button
            title="Return"
            variant="outlined"
            onClick={() => router.push("/")}
          />
          <Button title="Submit" variant="primary" onClick={() => onSubmit()} />
        </div>
      </div>
    </div>
  );
};

export default Form;

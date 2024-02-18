"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/form.module.scss";
import { useRouter } from "next/navigation";
import { Person, fakeApi } from "../utils/fakeApi";
import Button from "../components/Button";

const Form = () => {
  const router = useRouter();
  const [list, setList] = useState<Person[]>();
  const fakePerson = fakeApi();

  useEffect(() => {
    setList(fakePerson);
  }, []);

  return (
    <div className={styles.formContainer}>
      <div className={styles.titleContainer}>
        <div />
        <span className={styles.formTitle}>Form</span>
        <a onClick={() => router.push("/form")}>Return</a>
      </div>

      <div className={styles.insideFormContainer}>
        <ul className={styles.listContainer}>
          {list?.map((item, index) => (
            <li key={index}>
              {item.name} || {item.city}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button
          title="Return"
          variant="outlined"
          onClick={() => router.push("/form")}
        />
      </div>
    </div>
  );
};

export default Form;

import React, { useState } from "react";
import styles from "./Answer.module.css";

export default function Answer(props: any) {
  return (
    <div className={styles["answer-text"]}>
      <label>
        {props.letter}
        <input type="text" name="Answer" />
        <br />
        <input
          className={styles["radio-btn-left"]}
          type="radio"
          value="True"
          name="gender"
        />{" "}
        True
        <input
          className={styles["radio-btn-right"]}
          type="radio"
          value="False"
          name="gender"
        />{" "}
        False
      </label>
    </div>
  );
}

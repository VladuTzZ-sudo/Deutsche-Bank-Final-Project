import React, { useState } from "react";
import Answer from "./Answer";
import styles from "./Question.module.css";

export default function Question(props: any) {
  const [answersList, setAnswersList] = useState([]);
  const [count, setCount] = useState(0);
  const [lettersList, setlettersList] = useState([
    "A.",
    "B.",
    "C.",
    "D.",
    "E.",
    "F.",
    "G.",
    "H.",
    "I.",
    "J.",
    "K.",
    "L.",
    "M.",
    "N.",
    "O.",
    "P.",
    "Q.",
    "R.",
    "S.",
    "T.",
    "U.",
    "V.",
    "W.",
    "X.",
    "Y.",
    "Z.",
  ]);

  function onAddBtnClick(event: any) {
    setAnswersList(
      (answersList as any).concat(
        <Answer key={answersList.length} letter={lettersList[count]} />
      )
    );
    setCount(count + 1);
  }

  return (
    <div className={styles["question"]}>
      <div className={styles["question-text"]}>
        <label>
          Question no. {props.count} text:
          <br />
          <input type="text" name="questionText" />
        </label>
      </div>
      {answersList}
      <div className={styles["addBtnDiv"]}>
        <button className={styles["addQuestionBtn"]} onClick={onAddBtnClick}>
          Add Answer
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import FooterMain from "../FooterMain/FooterMain";
import NavBar from "../Navbar/NavBar";
import Question from "./QuizComponents/Question";
import styles from "./QuizzMakerAlex.module.css";

export default function QuizzMakerAlex() {
  const [questionList, setQuestionList] = useState([]);
  const [count, setCount] = useState(1);

  const navLinks = [
    { text: "Login", linkUrl: "/loginPage" },
    { text: "Register", linkUrl: "/registerPage" },
  ];

  function onAddBtnClick(event: any) {
    setQuestionList(
      (questionList as any).concat(
        <Question key={questionList.length} count={count} />
      )
    );
    setCount(count + 1);
  }

  function onAddBtnSubmit(event: any) {
    console.log(questionList);
    setQuestionList([]);
    setCount(1);
  }

  return (
    <div>
      <NavBar links={navLinks} />
      <div className={"container"}>
        <div id={styles["qm-title"]}>Create a Quizz</div>
        <div className={styles["big-div"]}>
          <div className={styles["quizz-title"]}>
            <label className={styles["title-label"]}>
              Quizz Title:
              <input
                className={styles["input-title"]}
                type="text"
                name="quizzTitle"
              />
            </label>
          </div>
          {/* dasd */}
          <div className={styles["quizz-title"]}>
            <label className={styles["title-label"]}>
              Duration:
              <input
                className={styles["input-duration"]}
                type="text"
                name="duration"
              />
            </label>
          </div>
          {/* dasd */}
          <div className={styles["quizz-title"]}>
            <label className={styles["title-label"]}>
              Due:
              <input className={styles["input-due"]} type="text" name="due" />
            </label>
          </div>
          {/* dasd */}
          <div className={styles["quizz-title"]}>
            <label className={styles["title-label"]}>
              Details:
              <input
                className={styles["input-details"]}
                type="text"
                name="details"
              />
            </label>
          </div>
          {questionList}
          <div className={styles["addBtnDiv"]}>
            <button
              className={styles["addQuestionBtn"]}
              onClick={onAddBtnClick}
            >
              Add Question
            </button>
          </div>
        </div>

        <div className={styles["submit-btn"]}>
          <button className={styles["addQuestionBtn"]} onClick={onAddBtnSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className={styles["blankDiv"]}></div>
      <FooterMain />
    </div>
  );
}

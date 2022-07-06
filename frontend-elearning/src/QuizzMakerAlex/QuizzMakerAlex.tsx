import React, { ChangeEvent, useState } from "react";
import FooterMain from "../FooterMain/FooterMain";
import NavBar from "../Navbar/NavBar";
import styles from "./QuizzMakerAlex.module.css";

export default function QuizzMakerAlex() {
  const navLinks = [
    { text: "Login", linkUrl: "/loginPage" },
    { text: "Register", linkUrl: "/registerPage" },
  ];

  const [quizz, setQuizz] = useState<any>({
    quizzTitle: "",
    duration: "",
    due: "",
    details: "",
    questions: [],
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setQuizz((prevState: any) => ({
      ...prevState,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
    }));
  };

  function onQuestionChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>
  ) {}

  function onSubmit(event: any) {
    event.preventDefault();
    console.log(quizz);
  }

  return (
    <div className={`${styles["page-style"]}`}>
      <NavBar links={navLinks} />
      <div className={`${styles["container"]}`}>
        <h1 className={styles["title"]}>dadada</h1>
        <form>
          <div className={styles["quizz-inputs"]}>
            <label>
              Quizz 2:
              <input onChange={handleChange} type="text" id="quizzTitle" />
            </label>
          </div>
          <div className={styles["quizz-inputs"]}>
            <label>
              Duration:
              <input onChange={handleChange} type="text" id="duration" />
            </label>
          </div>
          <div className={styles["quizz-inputs"]}>
            <label>
              Due:
              <input onChange={handleChange} type="datetime-local" id="due" />
            </label>
          </div>
          <div className={styles["quizz-inputs"]}>
            <label>
              Details:
              <input onChange={handleChange} type="text" id="details" />
            </label>
          </div>
          <div className={`${styles["quizz-inputs"]} ${styles["borderDiv"]}`}>
            {/* Question 1 */}
            <div className={styles["question-borderDiv"]}>
              <label>
                Question no.2:
                <input onChange={onQuestionChange} type="text" id="question1" />
              </label>
              <div className={styles["answer-text"]}>
                <label>
                  A.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerAq1text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerAq1value"
                    name="Question1A"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
              <div className={styles["answer-text"]}>
                <label>
                  B.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerBq1text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerBq1value"
                    name="Question1B"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
              <div className={styles["answer-text"]}>
                <label>
                  C.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerCq1text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerCq1value"
                    name="Question1C"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
            </div>
            {/* Question 2 */}
            <div className={styles["question-borderDiv"]}>
              <label>
                Question no.2:
                <input onChange={handleChange} type="text" id="question2" />
              </label>
              <div className={styles["answer-text"]}>
                <label>
                  A.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerAq2text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerAq2value"
                    name="Question2A"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
              <div className={styles["answer-text"]}>
                <label>
                  B.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerBq2text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerBq2value"
                    name="Question2B"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
              <div className={styles["answer-text"]}>
                <label>
                  C.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerCq2text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerCq2value"
                    name="Question2C"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
            </div>
            {/* Question 3 */}
            <div className={styles["question-borderDiv"]}>
              <label>
                Question no.3:
                <input onChange={handleChange} type="text" id="question3" />
              </label>
              <div className={styles["answer-text"]}>
                <label>
                  A.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerAq3text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerAq3value"
                    name="Question3A"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
              <div className={styles["answer-text"]}>
                <label>
                  B.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerBq3text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerBq3value"
                    name="Question3B"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
              <div className={styles["answer-text"]}>
                <label>
                  C.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerCq3text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerCq3value"
                    name="Question3C"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
            </div>
            {/* Question 4 */}
            <div className={styles["question-borderDiv"]}>
              <label>
                Question no.4:
                <input onChange={handleChange} type="text" id="question4" />
              </label>
              <div className={styles["answer-text"]}>
                <label>
                  A.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerAq4text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerAq4value"
                    name="Question4A"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
              <div className={styles["answer-text"]}>
                <label>
                  B.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerBq4text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerBq4value"
                    name="Question4B"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
              <div className={styles["answer-text"]}>
                <label>
                  C.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerCq4text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerCq4value"
                    name="Question4C"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
            </div>
            {/* Question 5 */}
            <div className={styles["question-borderDiv"]}>
              <label>
                Question no.5:
                <input onChange={handleChange} type="text" id="question5" />
              </label>
              <div className={styles["answer-text"]}>
                <label>
                  A.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerAq5text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerAq5value"
                    name="Question1A"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
              <div className={styles["answer-text"]}>
                <label>
                  B.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerBq5text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerBq5value"
                    name="Question5B"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
              <div className={styles["answer-text"]}>
                <label>
                  C.
                  <input
                    onChange={handleChange}
                    type="text"
                    id="answerCq5text"
                  />
                  <br />
                  <input
                    className={styles["radio-btn-left"]}
                    type="radio"
                    value="true"
                    id="answerCq5value"
                    name="Question5C"
                    onChange={handleChange}
                  />{" "}
                  True
                </label>
              </div>
            </div>
          </div>
          <div className={styles["quizz-inputs"]}>
            <button onClick={onSubmit}>Submit</button>
          </div>
        </form>
      </div>
      <FooterMain />
    </div>
  );
}

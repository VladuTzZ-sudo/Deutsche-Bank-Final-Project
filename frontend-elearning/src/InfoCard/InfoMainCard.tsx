import React from "react";
import styles from "./InfoMainCard.module.css";
import { useNavigate } from "react-router-dom";
import { cpuUsage } from "process";
import IMG from "./rsz_image.jpg";

export default function InfoMainCard() {
  let navigate = useNavigate();
  return (
    <div className={`row ${styles["big-div"]}`}>
      <div className={`col ${styles["left-div"]}`}>
        <div className={styles["title-div"]}>
          <h1 className={styles["title-cls"]}>Ultimate E-Learning App</h1>
        </div>
        <div className={styles["text-div"]}>
          <h2 className={styles["text-cls"]}>
            Today, when people say “eLearning”, they’re referring to training on
            any digital device. Watching an educational video, reading an
            interesting article, or taking a quiz — all that is eLearning.
          </h2>
        </div>
        <div className={styles["question-div"]}>
          <h2 className={styles["text-cls"]}>Are you interested?</h2>
        </div>
        <div className={styles["btn-div"]}>
          <button
            onClick={() => {
              navigate("/registerPage");
            }}
            className={styles["join-btn"]}
          >
            Yes!
          </button>
        </div>
      </div>
      <div className={`col ${styles["right-div"]}`}>
        <img src={IMG} className={styles["img-class"]} />
      </div>
    </div>
  );
}

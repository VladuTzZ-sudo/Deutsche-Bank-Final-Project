import React from "react";
import styles from "./InfoMainCard.module.css";
import { useNavigate } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function InfoMainCard() {
  let navigate = useNavigate();
  return (
    <div className={styles["text-part"]}>
      <div className={styles["container-center"]}>
        <h1 className={styles["info-title"]}>Ultimate E-Learning App</h1>
      </div>
      <div className={styles["container-center"]}>
        <h4 className={styles["about-text"]}>
          Today, when people say “eLearning”, they’re referring to training on
          any digital device. Watching an educational video, reading an
          interesting article, or taking a quiz — all that is eLearning.
        </h4>
      </div>
      <div id="join-text-id" className={styles["container-center"]}>
        <h4 className={styles["join-text"]}>Are you interested?</h4>
      </div>
      <button onClick={()=> {
        navigate("/registerPage");
      }} className={styles["join-btn"]}>Yes!</button>
    </div>
  );
}

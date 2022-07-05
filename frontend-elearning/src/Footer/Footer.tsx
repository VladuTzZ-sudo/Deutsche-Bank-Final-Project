import React from "react";
import Button from "../Button/Button";
import styles from "./Footer.module.css";

type Props = {
  courseTitle?: string;
  sectionTitle?: string;
  quizzTitle?: string;
};

export default function Footer(props: Props) {
  return (
    <div className={`${styles["pageColor"]} ${styles["footer"]}`}>
      <span className={`${styles["text--footer"]}`}>Learn now!</span>
      <span className={`${styles["text--footer"]}`}>{props.courseTitle}</span>
      <span className={`${styles["text--footer"]}`}>{props.sectionTitle}</span>
      <span className={`${styles["text--footer"]}`}>{props.quizzTitle}</span>
      <span className={`${styles["text--footer"]}`}>Have Fun!!</span>
      <footer className={`${styles["text--footer"]}`}>
        &copy; {new Date().getFullYear()} Copyright: Goal Diggers Team
      </footer>
    </div>
  );
}

import React from "react";
import styles from "./SecondSection.module.css";

export default function SecondSection() {
  return (
    <div className={styles["second-section"]}>
      <div className={styles["container-center"]}>
        <h1 className={styles["info-title-second-section"]}>Actions</h1>
      </div>
      <div className={styles["row-container"]}>
        <div className={`col ${styles["col-text-align"]}`}>
          <h2 className={styles["col-title"]}>Teacher:</h2>
          <h4 className={styles["col-text"]}>Upload courses</h4>
          <h4 className={styles["col-text"]}>Add new quiz</h4>
          <h4 className={styles["col-text"]}>Report module</h4>
          <h4 className={styles["col-text"]}>Notification module</h4>
        </div>
        <div className={`col ${styles["col-text-align"]}`}>
          <h2 className={styles["col-title"]}>Student:</h2>
          <h4 className={styles["col-text"]}>Take a quiz</h4>
          <h4 className={styles["col-text"]}>Personal page</h4>
          <h4 className={styles["col-text"]}>Report module</h4>
          <h4 className={styles["col-text"]}>Upload notes</h4>
        </div>
      </div>
    </div>
  );
}

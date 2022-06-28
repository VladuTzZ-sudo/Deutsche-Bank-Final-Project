import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CourseCard.module.css";
import "../../../index.css";
import Course from "../../../models/Course/Course";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  color: string;
  course: Course;
  onClick: (e: React.MouseEvent, course: Course) => void;
  className?: string;
  children?: React.ReactNode;
}

const CourseCard: FC<CardProps> = (props) => {
  const color: React.CSSProperties = { backgroundColor: props.color };
  const borderColor: React.CSSProperties = { borderColor: props.color };

  const progressFill: React.CSSProperties = {
    width: props.course.progress * 100 + "%",
  };

  return (
    <div className={`${styles["card"]} ${props.className}`}>
      <div className={styles["card__background"]} style={borderColor}></div>
      <div
        style={color}
        className={styles["card__content"]}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          props.onClick(e, props.course);
        }}
      >
        <FontAwesomeIcon className={styles["card__icon"]} icon={faDisplay} />
        <h3 className={styles["card__title"]}>{props.course.name}</h3>
        <p className={styles["card__description"]}>
          {props.course.description}
        </p>
        <div className={styles["card__delimiter"]}></div>
        <div className={styles["card__progress-container"]}>
          <p className={styles["card__progress-text"]}>Progress</p>
          <div className={styles["card__progress-bar"]}>
            <div
              className={styles["card__progress-fill"]}
              style={progressFill}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import styles from "./SectionCard.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ClassicButton from "../../Buttons/ClassicButton/ClassicButton";
import React from "react";
import Section from "../../../models/Course/Section";
import ReverseHoverButton from "../../Buttons/ReverseHover/ReverseHoverButton";

interface CardProps {
  section: Section;
  className?: string;
}

const SectionCard: FC<CardProps> = (props) => {
  return (
    <div className={`${styles["container"]} ${props.className}`}>
      <div className={styles["section__details"]}>
        <div className={styles["section__text"]}>
          <h3 className={styles["section__title"]}>{props.section.title}</h3>
          <p className={styles["section__description"]}>
            {props.section.description}
          </p>
        </div>
        <ReverseHoverButton className={styles["btn"]}>
          <span className={styles["btn__text"]}>Take the quiz</span>
          <FontAwesomeIcon
            className={styles["btn__icon"]}
            icon={faArrowRight}
          />
        </ReverseHoverButton>
      </div>
      <button
        className={styles["section__image"]}
        onClick={props.section.onImageClick}
      >
        <img
          className={styles["image"]}
          src={`${process.env.PUBLIC_URL}/assets/data-images/folder_with_files.PNG`}
        />
      </button>
    </div>
  );
};
export default SectionCard;

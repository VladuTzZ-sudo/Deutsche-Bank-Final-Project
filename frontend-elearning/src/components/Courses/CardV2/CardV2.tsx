import React, { Dispatch, FC, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CardV2.module.css";
import "../../../index.css";
import Course from "../../../models/Course";
import Setting from "../../../models/Setting";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface SettingProps {
  color: string;
  course: Setting;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

const CardV2: FC<SettingProps> = (props) => {
  const color: React.CSSProperties = { backgroundColor: props.color };
  const borderColor: React.CSSProperties = { borderColor: props.color };
  console.log("DIN CARD");
  return (
    <div className={`${styles["card"]} ${props.className}`}>
      <div className={styles["card__background"]} style={borderColor}></div>
      <div style={color} className={styles["card__content"]} onClick={props.onClick}
        // var maam : IconDefinition = props.course.icon;
        // props.course.icon = props.course.second_icon;
        // props.course.second_icon = maam;
        //}}
        >
        <FontAwesomeIcon
          className={styles["card__icon"]}
          icon={props.course.icon}
        />
        <h3 className={styles["card__title"]}>{props.course.title}</h3>
      </div>
    </div>
  );
};

export default CardV2;


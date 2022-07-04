import { FC } from "react";
import styles from "./MiniCard.module.css";

export interface MiniCardProps {
  onClick?: any;
  className?: string;
  id: number;
  children?: React.ReactNode;
  number: number;
  color: number;
  mode?: number;
  validation?: number;
}

const MiniCard: FC<MiniCardProps> = (props) => {
  if (typeof props.mode === "undefined") {
    console.log("A intrat e bine 1");
    return (
      <div onClick={() => { props.onClick(props.id) }} className={`${styles["button"]}`}>
        <div className={`${styles["upperButton"]}`}>
        </div>
        <div className={`${styles["lowerButton"]}`}>
          {props.number}
        </div>
      </div>
    );
  } else if (props.mode == 1) {
    console.log("A intrat e bine 2");

    return (
      <div onClick={() => { props.onClick(props.id) }} className={`${styles["button"]}`}>
        <div className={`${styles["upperButton"]}`}>
        </div>
        <div className={`${styles["lowerButton2"]}`}>
          {props.number}
        </div>
      </div>
    );
  } else {
    console.log("A intrat e bine 3");
    if (props.color == 1) {
      return (
        <div onClick={() => { props.onClick(props.id) }} className={`${styles["button"]}`}>
          <div className={`${styles["upperButton"]}`}>
          </div>
          <div className={`${styles["lowerButton3"]}`}>
            {props.number}
          </div>
        </div>
      );
    } else {
      return (
        <div onClick={() => { props.onClick(props.id) }} className={`${styles["button"]}`}>
          <div className={`${styles["upperButton"]}`}>
          </div>
          <div className={`${styles["lowerButton4"]}`}>
            {props.number}
          </div>
        </div>
      );
    }
  }

}

export default MiniCard;

import { FC } from "react";
import styles from "./MiniCard.module.css";

interface MiniCardProps {
  onClick?: any;
  className?: string;
  children?: React.ReactNode;
  number: number;
  mode?: number;
  validation?: number;
}

const MiniCard: FC<MiniCardProps> = (props) => {
  if (typeof props.mode === "undefined") {
    return (
      <div onClick={() => { props.onClick(props.number) }} className={`${styles["button"]}`}>
        <div className={`${styles["upperButton"]}`}>
        </div>
        <div className={`${styles["lowerButton"]}`}>
          {props.number}
        </div>
      </div>
    );
  } else if (props.mode == 1) {
    return (
      <div onClick={() => { props.onClick(props.number) }} className={`${styles["button"]}`}>
        <div className={`${styles["upperButton"]}`}>
        </div>
        <div className={`${styles["lowerButton2"]}`}>
          {props.number}
        </div>
      </div>
    );
  } else {
    return (
      <div onClick={() => { props.onClick(props.number) }} className={`${styles["button"]}`}>
        <div className={`${styles["upperButton"]}`}>
        </div>
        <div className={`${styles["lowerButton2"]}`}>
          {props.number}
        </div>
      </div>
    );
  }
}

export default MiniCard;

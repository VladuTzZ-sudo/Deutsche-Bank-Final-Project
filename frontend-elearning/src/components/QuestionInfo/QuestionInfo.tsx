import { FC } from "react";
import styles from "./QuestionInfo.module.css";

interface QuestionInfoProps {
  onClick?: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
  number: number;
  mark?: number;
  mode?: number;
}

const QuestionInfo: FC<QuestionInfoProps> = (props) => {
  if (typeof props.mode === "undefined") {
    return (
      <div className={`${styles["div--question--info"]}`}>
        <span className={`${styles["paragraph_special"]}`}>Question <span className={`${styles["paragraph_number"]}`}>{props.number}</span></span>
        <span className={`${styles["paragraph_general"]}`}>Not complete</span>
        <span className={`${styles["paragraph_general"]}`}>Marked out of 100</span>
        <span className={`${styles["paragraph_special"]}`}>Flag question</span>
      </div>
    );
  } else {
    if (props.mode == 1) {
      return (
        <div className={`${styles["div--question--info"]}`}>
          <span className={`${styles["paragraph_special"]}`}>Question <span className={`${styles["paragraph_number"]}`}>{props.number}</span></span>
          <span className={`${styles["paragraph_special"]}`}>Review</span>
          <span className={`${styles["paragraph_special"]}`}>Edit question</span>
        </div>
      );
    } else {
      if (typeof props.mark !== "undefined") {
        return (
          <div className={`${styles["div--question--info"]}`}>
            <span className={`${styles["paragraph_special"]}`}>Question <span className={`${styles["paragraph_number"]}`}>{props.number}</span></span>
            <span className={`${styles["paragraph_general"]}`}>Not complete</span>
            <span className={`${styles["paragraph_general"]}`}>Marked {props.mark / 10} of 100</span>
            <span className={`${styles["paragraph_special"]}`}>Flag question</span>
          </div>
        );
      }else {
        return (
          <div className={`${styles["div--question--info"]}`}>
            <span className={`${styles["paragraph_special"]}`}>Question <span className={`${styles["paragraph_number"]}`}>{props.number}</span></span>
            <span className={`${styles["paragraph_general"]}`}>Completed</span>
            <span className={`${styles["paragraph_special"]}`}>Marked - of 100</span>
          </div>
        );
      }
    }
  }
};

export default QuestionInfo;

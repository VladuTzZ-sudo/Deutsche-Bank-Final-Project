import { FC } from "react";
import styles from "./QuestionInfo.module.css";

interface QuestionInfoProps {
  onClick?: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
  number: number;
  mark?: number;
}

const QuestionInfo: FC<QuestionInfoProps> = (props) => {
  return (
    <div className={`${styles["div--question--info"]}`}>
      <span className={`${styles["paragraph_special"]}`}>Question <span className={`${styles["paragraph_number"]}`}>{props.number}</span></span>
      <span className={`${styles["paragraph_general"]}`}>Not complete</span>
      <span className={`${styles["paragraph_general"]}`}>Marked out of 1.00</span>
      <span className={`${styles["paragraph_special"]}`}>Flag question</span>
    </div>
  );
};

export default QuestionInfo;

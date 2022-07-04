import { FC } from "react";
import AnswerQuestion from "../AnswerQuizz/AnswerQuestion";
import QuestionInfo from "../QuestionInfo/QuestionInfo";
import styles from "./QuestionQuizz.module.css";

interface QuestionQuizzProps {
  id?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
  answers: React.ReactNode;
  number: number;
  question: string;
  mark? : number;
  mode?: number;
}

const QuestionQuizz: FC<QuestionQuizzProps> = (props) => {
  if (typeof props.mode === "undefined") {
    console.log("1", "ANSIADMOAIDA");
    return (
      <div className={`${styles["div--question--and--info"]}`}>
        <QuestionInfo number={props.number}></QuestionInfo>
        <div className={`${styles["div--question"]}`}>
          <span className={`${styles["paragraph_navi"]}`}>{props.question}</span>
          <>{props.answers}</>
        </div>
      </div>
    );
  } else if (props.mode == 1) {
    console.log("2", "ANSIADMOAIDA");
    return (
      <div className={`${styles["div--question--and--info"]}`}>
        <QuestionInfo number={props.number} mode={props.mode}></QuestionInfo>
        <div className={`${styles["div--question2"]}`}>
          <span className={`${styles["paragraph_navi"]}`}>{props.question}</span>
          <>{props.answers}</>
        </div>
      </div>
    );
  } else {
    console.log("3", "ANSIADMOAIDA", props.mode);
    return (
      <div className={`${styles["div--question--and--info"]}`}>
        <QuestionInfo number={props.number} mode={props.mode} mark={props.mark}></QuestionInfo>
        <div className={`${styles["div--question3"]}`}>
          <span className={`${styles["paragraph_navi"]}`}>{props.question}</span>
          <>{props.answers}</>
        </div>
      </div>
    );
  }
};

export default QuestionQuizz;

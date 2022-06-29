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
}

const QuestionQuizz: FC<QuestionQuizzProps> = (props) => {
  return (
    <div className={`${styles["div--question--and--info"]}`}>
      <QuestionInfo number={props.number}></QuestionInfo>
      <div className={`${styles["div--question"]}`}>
        <span className={`${styles["paragraph_navi"]}`}>{props.question}</span>
        <>{props.answers}</>
      </div>
    </div>
  );
};

export default QuestionQuizz;

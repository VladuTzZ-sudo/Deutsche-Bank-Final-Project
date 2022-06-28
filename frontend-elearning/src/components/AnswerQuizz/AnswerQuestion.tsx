import { FC } from "react";
import styles from "./AnswerQuestion.module.css";

interface AnswerQuestionProps {
  onClick?: any;
  className?: string;
  children?: React.ReactNode;
  answer: string;
  questionNumber: number;
  answerNumber: number;
}

function handleChange() {
  console.log("OPA");
}

const AnswerQuestion: FC<AnswerQuestionProps> = (props) => {
  return (
    <div className={`${styles["answer"]}`}>
      <input onChange={() => props.onClick(props.questionNumber, props.answerNumber)} type="radio" id="vehicle1" name={props.questionNumber.toString()} value="Bike"></input>
      <label><span className={`${styles["texxt"]}`}>{" " + props.answer}</span></label>
    </div>
  );
};

export default AnswerQuestion;

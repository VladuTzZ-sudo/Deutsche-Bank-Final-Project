import { FC } from "react";
import styles from "./AnswerQuestion.module.css";

interface AnswerQuestionProps {
  onClick?: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
  answer: string;
}

const AnswerQuestion: FC<AnswerQuestionProps> = (props) => {
  return (
    <div className={`${styles["answer"]}`}>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label> <span className="texxt">{" " + props.answer}</span></label>
    </div>
  );
};

export default AnswerQuestion;

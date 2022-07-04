import { FC } from "react";
import { QuestionQuizzProps } from "../../QuizPlay/QuizzPlay";
import styles from "./AnswerQuestion.module.css";

interface AnswerQuestionProps {
	onClick?: any;
	className?: string;
	children?: React.ReactNode;
	answer: string;
	questionNumber: number;
	answerNumber: number;
	validation: boolean;
	correct?: boolean;
	questionComponent?: QuestionQuizzProps;
	mode?: number;
}

function handleChange() {
	console.log("OPA");
}

const AnswerQuestion: FC<AnswerQuestionProps> = (props) => {
	if (typeof props.mode === "undefined") {
		return (
			<div className={`${styles["answer"]}`}>
				<input
					onChange={() => props.onClick(props.questionNumber, props.answerNumber, props.questionComponent)}
					type="radio"
					id="vehicle1"
					name={props.questionNumber.toString()}
					value="Bike"
				></input>
				<label>
					<span className={`${styles["texxt"]}`}>{" " + props.answer}</span>
				</label>
			</div>
		);
	} else if (props.mode == 1) {
		return (
			<div className={`${styles["answer"]}`}>
				<input
					type="radio"
					id="vehicle1"
					checked={props.validation}
					name={props.questionNumber.toString()}
					value="Bike"
				></input>
				<label>
					<span className={`${styles["texxt"]}`}>{" " + props.answer}</span>
				</label>
			</div>
		);
	} else {
		if (props.validation == true) {
			return (
				<div className={`${styles["answer"]}`}>
					<input
						type="radio"
						id="vehicle1"
						checked={props.correct}
						name={props.questionNumber.toString()}
						value="Bike"
					></input>
					<label>
						<span className={`${styles["texxt-ok"]}`}>{" " + props.answer}</span>
					</label>
				</div>
			);
		} else {
			return (
				<div className={`${styles["answer"]}`}>
					<input
						type="radio"
						id="vehicle1"
						checked={props.correct}
						name={props.questionNumber.toString()}
						value="Bike"
					></input>
					<label>
						<span className={`${styles["texxt-wrong"]}`}>{" " + props.answer}</span>
					</label>
				</div>
			);
		}
	}
};

export default AnswerQuestion;

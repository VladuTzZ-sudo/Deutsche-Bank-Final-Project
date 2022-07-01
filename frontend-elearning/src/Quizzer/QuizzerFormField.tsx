import React from "react";
import styles from "./QuizzerFormField.module.css";
import useQuizzerFormField from "./useQuizzerFormField";

const QuizzerFormField = () => {
	const { fields, register, addNewQuestion, removeQuestion } =
		useQuizzerFormField();

	return (
		<div className={styles.wrapper}>
			<div className={styles.labelContainer}>
				<div className={styles["divInputs"]}>
					<label>
						Quizz Title:
						<input
							className={styles["inputStyle"]}
							{...register("quizzTitle")}
							placeholder="QuizzTitle"
						/>
					</label>
				</div>
				<div className={styles["divInputs"]}>
					<label>
						Duration:
						<input
							className={styles["inputStyle"]}
							{...register("duration")}
							placeholder="Duration"
						/>
					</label>
				</div>
				<div className={styles["divInputs"]}>
					<label>
						Due:
						<input
							type="datetime-local"
							className={styles["inputStyle"]}
							{...register("due")}
							placeholder="Due"
						/>
					</label>
				</div>
				<div className={styles["divInputs"]}>
					<label>
						Details:
						<input
							className={styles["inputStyle"]}
							{...register("details")}
							placeholder="Details"
						/>
					</label>
				</div>
			</div>
			{fields.map((field, index) => (
				<div key={field.id} className={styles.propertyContainer}>
					<div className={styles["divContainer"]}>
						<label>
							<h1>Question no.{index + 1}</h1>
							<input
								className={styles["inputStyle"]}
								{...register(`questions.${index}.questionText`)}
								placeholder="Question Text"
							/>
						</label>
						<button
							type="button"
							onClick={removeQuestion(index)}
							className={styles["removeBtn"]}
						>
							-
						</button>
						<div className={styles["answerBox"]}>
							<div className={styles["divInputs"]}>
								<label>
									A.
									<input
										className={styles["inputStyle"]}
										{...register(`questions.${index}.answers.0.answerText`)}
										placeholder="Answer Text"
									/>
								</label>
							</div>
							<div className={styles["divInputs"]}>
								<input
									className={styles["inputStyle"]}
									{...register(`questions.${index}.answers.0.answerValue`)}
									placeholder="Answer Value"
								/>
							</div>
						</div>
						<div className={styles["answerBox"]}>
							<div className={styles["divInputs"]}>
								<label>
									B.
									<input
										className={styles["inputStyle"]}
										{...register(`questions.${index}.answers.1.answerText`)}
										placeholder="Answer Text"
									/>
								</label>
							</div>
							<div className={styles["divInputs"]}>
								<input
									className={styles["inputStyle"]}
									{...register(`questions.${index}.answers.1.answerValue`)}
									placeholder="Answer Value"
								/>
							</div>
						</div>
						<div className={styles["answerBox"]}>
							<div className={styles["divInputs"]}>
								<label>
									C.
									<input
										className={styles["inputStyle"]}
										{...register(`questions.${index}.answers.2.answerText`)}
										placeholder="Answer Text"
									/>
								</label>
							</div>
							<div className={styles["divInputs"]}>
								<input
									className={styles["inputStyle"]}
									{...register(`questions.${index}.answers.2.answerValue`)}
									placeholder="Answer Value"
								/>
							</div>
						</div>
					</div>
				</div>
			))}
			<div className={styles["divInputs"]}>
				<button
					type="button"
					onClick={addNewQuestion}
					className={styles["addBtn"]}
				>
					+ Add Question
				</button>
			</div>
		</div>
	);
};

export default QuizzerFormField;

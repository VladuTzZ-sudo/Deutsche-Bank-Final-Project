import React from "react";
import styles from "./QuizzListen.module.css";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import { useState } from "react";

type Props = {};

// Pentru get, ar trebuie sa trimit:
// id student
// id quizz
// acces Token
export default function QuizzFinishedPage({}: Props) {
	const [quizInfo, setQuizInfo] = useState({
		courseTitle: "Baze de date1",
		sectionTitle: "Baze de date relationale",
		quizzTitle: "Verifcare bd relationale",
		durationQuiz: "20",
		endDateQuiz: "22-01-2022, 12:40",
		detailsQuiz: `Chestionarul contine 10 intrebari, 3 variante de raspuns, un singur raspuns corect. Intrebarile se parcurg secvential, fara posibilitate de revenire la intrebarea anterioara. Rezultatul este vizibil dupa inchiderea testului. Timpul de evaluare este de 10 minute. `,
		submitedDate: "Tuesday, 8 March 2022, 11:38 AM",
		quizMark: 9.0,
		isQuizEnded: 0,
	});
	return (
		<div>
			<div className={`${styles["page"]}`}>
				<div className={`${styles["div--description__principal"]}`}>
					<span className={`${styles["text--title"]}`}>
						{quizInfo.courseTitle}
					</span>
					<span className={`${styles["text--normal__principal"]}`}>
						Section: {quizInfo.sectionTitle}
					</span>
				</div>
				<div className={`${styles["div--incapsulation"]}`}>
					<div className={`${styles["div--description"]}`}>
						<span className={`${styles["text--subtitle__principal"]}`}>
							Quiz title: {quizInfo.quizzTitle}{" "}
						</span>
						<span className={`${styles["text--normal"]}`}>
							Duration: {quizInfo.durationQuiz} minutes
						</span>
						<span className={`${styles["text--normal"]}`}>
							Closed: {quizInfo.endDateQuiz}
						</span>
					</div>
					<div className={`${styles["div--must-description"]}`}>
						<p className={`${styles["paragraph"]}`}>
							<h4>{quizInfo.detailsQuiz}</h4>
						</p>
						<div className={`${styles["div--attemps-time"]}`}>
							<ul className={`${styles["list--parent"]}`}>
								<span className={`${styles["text--normal"]}`}>
									Attempts allowed: 1
								</span>
							</ul>
						</div>
						<div className={`${styles["div--dynamic-info"]}`}>
							<span className={`${styles["text--subtitle"]}`}>
								Summary of your previous attempts
							</span>
							<div className={`${styles["div--dynamic-table_up"]}`}>
								<li className={`${styles["one"]}`}>State</li>
								<li className={`${styles["two"]}`}>Grade / 10.00</li>
								<li className={`${styles["three"]}`}>Review</li>
							</div>
							<div className={`${styles["div--dynamic-table_down"]}`}>
								<li className={`${styles["one"]}`}>
									<span>Finished</span>
									<span>Submitted date: {quizInfo.submitedDate}</span>
								</li>
								<li className={`${styles["two"]}`}>{quizInfo.quizMark}</li>
								<li className={`${styles["three"]}`}>
									{quizInfo.isQuizEnded == 0 ? (
										"Not permitted"
									) : (
										<Button
											text="Review your test!"
											func={() => {
												console.log("Quizz revied!");
											}}
											type="1"
										/>
									)}
								</li>
							</div>

							<div className={`${styles["elemFlexCenter"]}`}>
								<Button
									text="Back to the course"
									func={() => {
										handleSubmit();
									}}
									type="1"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer
				courseTitle={quizInfo.courseTitle}
				sectionTitle={quizInfo.sectionTitle}
				quizzTitle={quizInfo.quizzTitle}
			/>
		</div>
	);
}

function handleSubmit() {
	throw new Error("Function not implemented.");
}

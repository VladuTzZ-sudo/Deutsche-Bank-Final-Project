import React from "react";
import styles from "./QuizzStartPage.module.css";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
type Props = {};
// la get trebuie date:
// quizz ID
// token de acces!
export default function QuizStartPage({}: Props) {
	let navigate = useNavigate();
	const [quizInfo, setQuizzInfo] = useState({
		subjectTitle: "Baze de date1",
		sectionTitle: "Baze de date relationale",
		quizTitle: "Verifcare bd relationale",
		duration: "20",
		endDate: "22-01-2022, 12:40",
		details:
			"Chestionarul contine 10 intrebari, 3 variante de raspuns, un singur raspuns corect.Intrebarile se parcurg secvential, fara posibilitate de revenire la intrebarea anterioara. Rezultatul este vizibil dupa inchiderea testului.Timpul de evaluare este de 10 minute. ",
	});

	let location = useLocation();

	function getDataForStartQuizPage() {
		let token = (location.state as any).credentials.token;

		axios
			.get(
				"http://localhost:8080/courses/" +
					(location.state as any).courseId +
					"/sections/" +
					(location.state as any).sectionId +
					"/quizStart",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((response) => {
				setQuizzInfo(response.data);
			})
			.catch((err) => {
				alert(err);
			});
	}
	useEffect(() => {
		getDataForStartQuizPage();
	}, []);
	return (
		<div>
			<div className={`${styles["page"]}`}>
				<div className={`${styles["div--description__principal"]}`}>
					<span className={`${styles["text--title"]}`}>
						{quizInfo.subjectTitle}
					</span>
					<span className={`${styles["text--normal__principal"]}`}>
						Section: {quizInfo.sectionTitle}
					</span>
				</div>
				<div className={`${styles["div--incapsulation"]}`}>
					<div className={`${styles["div--description"]}`}>
						<span className={`${styles["text--subtitle__principal"]}`}>
							Quizz title: {quizInfo.quizTitle}{" "}
						</span>
						<span className={`${styles["text--normal"]}`}>
							Duration time: {quizInfo.duration} minutes
						</span>
						<span className={`${styles["text--normal"]}`}>
							Closed: {new Date(quizInfo.endDate).toString()}
						</span>
					</div>
					<div className={`${styles["div--must-description"]}`}>
						<div className={`${styles["paragraph"]}`}>
							<h4>{quizInfo.details}</h4>
						</div>
						<div className={`${styles["div--attemps-time"]}`}>
							<ul className={`${styles["list--parent"]}`}>
								<span className={`${styles["text--normal"]}`}>
									Attempts allowed: 1
								</span>
							</ul>
						</div>

						<div className={`${styles["elemFlexCenter"]}`}>
							<Button
								text="Attempt quizz"
								func={() => {
									navigate("/playQuizz", {
										state: {
											generalState: location.state,
											subjectTitle: quizInfo.subjectTitle,
											sectionTitle: quizInfo.sectionTitle,
											courseId: (location.state as any).courseId,
											sectionId: (location.state as any).sectionId,
										},
									});
								}}
								type="1"
							/>
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
			<Footer />
		</div>
	);
}

function handleSubmit() {
	throw new Error("Function not implemented.");
}

import React, { useEffect, useRef, useState } from "react";
import styles from "./QuizzTeacher.module.css";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import MiniCard from "../components/QuizzMiniCard/MiniCard";
import AnswerQuestion from "../components/AnswerQuizz/AnswerQuestion";
import QuestionInfo from "../components/QuestionInfo/QuestionInfo";
import QuestionQuizz from "../components/QuestionQuizz/QuestionQuizz";
import { JsxEmit, textSpanContainsTextSpan } from "typescript";
import {
	Link,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

import {
	useLocation,
	useNavigate,
	useParams,
	Location,
} from "react-router-dom";
import QuizzRepository from "../Repositories/Quizz/QuizzRepository";
import UserAuth from "../models/UserAuth";
import FooterMain from "../FooterMain/FooterMain";

type Props = {};

const onClick = (questionNumber: number, answerNumber: number) => {
	console.log("OPA, adevarat", questionNumber, answerNumber);
};

export interface QuestionQuizzProps {
	id?: string;
	onClick?: React.MouseEventHandler;
	className?: string;
	children?: React.ReactNode;
	answers: React.ReactNode;
	number: number;
	question: string;
	miniCard: React.ReactNode;
}

export default function QuizzTeacher({ }: Props) {
	const navigate = useNavigate();
	const location: Location = useLocation();
	var ok = 0;
	const [loggedUser, setLoggedUser]: [
		UserAuth,
		React.Dispatch<React.SetStateAction<UserAuth>>
	] = useState({
		name: "",
		role: "",
		token: "",
	});

	useEffect(() => {
		setLoggedUser((location.state as any).credentials);
		console.log(location, "token");
		getQuestions();
		ok = 0;
	}, []);

	const getQuestions = async () => {
		let sections: QuestionQuizzProps[] = await QuizzRepository.getQuestions(
			(location.state as any).generalState.credentials.token,
			(location.state as any).courseId,
			(location.state as any).sectionId,
			1
		);

		setQuestionsOk(sections);
	};

	const [qustionsOk, setQuestionsOk] = useState<QuestionQuizzProps[]>([
		{
			answers: (
				<>
				</>
			),
			number: 1,
			question: "Diagramele de interactiune se folosesc pentru a modela",
			miniCard: (
				<>
					<MiniCard color={0} id={1} number={1}></MiniCard>
				</>
			),
		},
	]);

	const handleSubmit = () => {
		navigate(-1);
	}

	return (
		<div className={`${styles["page-style"]}`}>
			<div className={`${styles["page"]}`}>
				<div className={`${styles["div--description__principal"]}`}>
					<span className={`${styles["text--title"]}`}>
						{(location.state as any).subjectTitle}
					</span>
					<div>
						<span className={`${styles["text--normal__principal2"]}`}>Section</span>
						<span className={`${styles["text--subtitle__principal"]}`}>
							{(location.state as any).sectionTitle}
						</span>
					</div>
				</div>

				<div className={`${styles["div--quizz"]}`}>
					<div className={`${styles["div--all--questions"]}`}>
						{qustionsOk.map((question: QuestionQuizzProps) => {
							if (ok == 0) {
								ok = question.number - 1;
							}
							return (
								<Element name={question.number.toString()}>
									<div id={`${question.number}`}>
										<QuestionQuizz
											id={question.number.toString()}
											question={question.question}
											number={question.number - ok}
											answers={question.answers}
											mode={1}
										></QuestionQuizz>
									</div>
								</Element>
							)
						})}

						<div className={`${styles["elemFlexCenter"]}`}>
							<Element name="Submit">
								<Button
									text="Back"
									func={() => {
										handleSubmit();
									}}
									type="1"
								/>
							</Element>
						</div>
					</div>
					<div className={`${styles["div--squareNumbers2"]}`}>
						<span className={`${styles["text--subtitle"]}`}>
							Quiz Navigation
						</span>
						<div className={`${styles["container-buttons"]}`}>
							{qustionsOk.map((question: QuestionQuizzProps) => (
								<>{question.miniCard}</>
							))}
						</div>

						<span
							onClick={submit}
							className={`${styles["paragraph_quiz--navaigation"]} ${styles["span-finish"]}`}
						>
							Back
						</span>
					</div>
				</div>
			</div>
			<FooterMain />
		</div>
	);
}

function submit() {
	scrollTo("Submit");
}

function scrollTo(name: string) {
	scroller.scrollTo(name, {
		duration: 800,
		delay: 0,
		smooth: "easeInOutQuart",
	});
}

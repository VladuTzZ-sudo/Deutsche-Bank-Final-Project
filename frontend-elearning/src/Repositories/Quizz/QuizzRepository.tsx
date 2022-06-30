import Course from "../../models/Course/Course";
import CourseGetDTO from "../../models/Course/CourseGetDTO";
import Section from "../../models/Course/Section/Section";
import SectionGetDTO from "../../models/Course/Section/SectionGetDTO";
import { CourseService } from "../../Services/Course/CourseService";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import QuizzQuestions from "../../models/Quiz/QuizQuestions";
import {
	AnswerQuestionDTO,
	QuizzGetDTO,
	QuizzPlayService,
} from "../../Services/QuizzPlayService/QuizzPlayService";
import MiniCard from "../../components/QuizzMiniCard/MiniCard";
import AnswerQuestion from "../../components/AnswerQuizz/AnswerQuestion";
import { QuestionQuizzProps } from "../../QuizPlay/QuizzPlay";

const onClick = (questionNumber: number, answerNumber: number) => {
	console.log("OPA, adevarat", questionNumber, answerNumber);
	window.sessionStorage.setItem(
		questionNumber.toString(),
		answerNumber.toString()
	);
};
// TODO: Exceptions
const QuizzRepository = {
	getQuestions: async (
		authToken: string,
		courseId: string,
		sectionId: string
	): Promise<QuestionQuizzProps[]> => {
		const apiQuestions: QuizzGetDTO[] = await QuizzPlayService.getQuestions(
			authToken,
			courseId,
			sectionId
		);

		if (apiQuestions.length > 0 && typeof apiQuestions !== "undefined") {
			apiQuestions.sort((a: QuizzGetDTO, b: QuizzGetDTO) => {
				if (typeof a.id !== "undefined" && typeof b.id !== "undefined") {
					return a.id - b.id;
				} else {
					return 0;
				}
			});
		}

		console.log(apiQuestions, "mama");

		const questions: QuestionQuizzProps[] = [];

		for (let apiQuestion of apiQuestions) {
			const answers: React.ReactNode = (
				<>
					{apiQuestion.answers.map((ans: AnswerQuestionDTO) => (
						<AnswerQuestion
							questionNumber={apiQuestion.id}
							answerNumber={ans.id}
							onClick={onClick}
							answer={ans.answerContent}
						></AnswerQuestion>
					))}
				</>
			);

			// for (let answer of apiQuestion.answers) {
			//   const answerNode: React.ReactNode = <AnswerQuestion questionNumber={apiQuestion.id} answerNumber={answer.id}
			//     onClick={onClick} answer={answer.answerContent}></AnswerQuestion>

			//     answers.props = answerNode;
			//   // answers.props.push(answerNode);
			// }

			const question: QuestionQuizzProps = {
				id: apiQuestion.id.toString(),
				number: apiQuestion.id,
				question: apiQuestion.contentQuestion,
				answers: answers,
				miniCard: (
					<>
						<MiniCard number={apiQuestion.id}></MiniCard>
					</>
				),
			} as QuestionQuizzProps;

			questions.push(question);
		}

		console.log("REZULTATE", questions);

		return questions;
	},
};

export default QuizzRepository;

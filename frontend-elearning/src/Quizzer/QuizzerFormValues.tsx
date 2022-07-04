interface QuizzerFormValues {
	quizzTitle: string;
	duration: string;
	due: EpochTimeStamp;
	details: string;
	questions: {
		questionText: string;
		answers: { answerText: string; answerValue: string }[];
	}[];
}

export default QuizzerFormValues;

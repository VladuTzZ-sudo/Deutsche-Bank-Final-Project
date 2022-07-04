interface QuizzerFormValues {
  quizzTitle: string;
  duration: string;
  due: string;
  details: string;
  questions: {
    questionText: string;
    answers: { answerText: string; answerValue: string }[];
  }[];
}

export default QuizzerFormValues;

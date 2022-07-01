import Course from "../../models/Course/Course";
import CourseGetDTO from "../../models/Course/CourseGetDTO";
import Section from "../../models/Course/Section/Section";
import SectionGetDTO from "../../models/Course/Section/SectionGetDTO";
import { CourseService } from "../../Services/Course/CourseService";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import QuizzQuestions from "../../models/Quiz/QuizQuestions";
import {
  AllreviewDTO,
  AnswerAllDTO,
  AnswerQuestionDTO,
  QuizzGetDTO,
  QuizzPlayService,
} from "../../Services/QuizzPlayService/QuizzPlayService";
import MiniCard, { MiniCardProps } from "../../components/QuizzMiniCard/MiniCard";
import AnswerQuestion from "../../components/AnswerQuizz/AnswerQuestion";
import QuizzListen, { QuestionQuizzProps } from "../../QuizPlay/QuizzPlay";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { FC } from "react";
import { AnswersQuizzProps } from "../../QuizzReviewStudent/QuizzReviewStudent";

const onClick = (questionNumber: number, answerNumber: number, questionComponent: QuestionQuizzProps) => {
  var raspunsIntrebare = questionNumber.toString();

  window.sessionStorage.setItem(
    questionNumber.toString(),
    answerNumber.toString()
  );

  let haha = window.sessionStorage.getItem("answers");
  if (haha == null) {
    window.sessionStorage.setItem("answers", raspunsIntrebare);
  } else {
    if (haha.indexOf(raspunsIntrebare) == -1) {
      raspunsIntrebare += "-" + haha;
      window.sessionStorage.setItem("answers", raspunsIntrebare);
    }
  }

  questionComponent.miniCard = questionComponent.changeColor();

};

var questions: QuestionQuizzProps[] = [];

function scrollTo(name: string) {
  scroller.scrollTo(name, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}

const clickCard = (number: number) => {
  console.log("AKI");
  scrollTo(number.toString());
};

// TODO: Exceptions
const QuizzRepository = {
  getQuestions: async (
    authToken: string,
    courseId: string,
    sectionId: string,
    mode?: number
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

    questions = [];
    var i = 0;
    for (let apiQuestion of apiQuestions) {
      if (i == 0) {
        i = apiQuestion.id - 1;
      }

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
        changeColor: () => {
          return <MiniCard
            color={1}
            onClick={clickCard}
            id={apiQuestion.id}
            number={apiQuestion.id - i}
            mode={mode}
          ></MiniCard>
        },
        miniCard: (
          <MiniCard
            color={0}
            onClick={clickCard}
            id={apiQuestion.id}
            number={apiQuestion.id - i}
            mode={mode}
          ></MiniCard>
        ),
      } as QuestionQuizzProps;

      const answers: React.ReactNode = (
        <>
          {apiQuestion.answers.map((ans: AnswerQuestionDTO) => (
            <AnswerQuestion
              questionNumber={apiQuestion.id}
              answerNumber={ans.id}
              onClick={onClick}
              questionComponent={question}
              answer={ans.answerContent}
              validation={ans.validation}
              mode={mode}
            ></AnswerQuestion>
          ))}
        </>
      );

      question.answers = answers;

      questions.push(question);
    }

    console.log("REZULTATE", questions);

    return questions;
  },
  getAllAnswers: async (
    authToken: string,
    quizzId: string,
    mode?: number
  ): Promise<AnswersQuizzProps[]> => {
    {
      const apiQuestions: AllreviewDTO[] = await QuizzPlayService.getAllreview(
        authToken,
        quizzId
      );

      var i = 1;
      const answers: AnswersQuizzProps[] = [];
      for (let apiQuestion of apiQuestions) {
        let a :React.ReactNode = <></>

        const question: AnswersQuizzProps = {
          id: i.toString(),
          number: i,
          question: apiQuestion.contentQuestion,
          answers: a,
          miniCard: <></>,
          mark: 0
        } as AnswersQuizzProps;

        var correct = true;
        const answer: React.ReactNode = (
          <>
            {apiQuestion.answers.map((ans: AnswerAllDTO) => {
              var mama : boolean = false;
              if (ans.correctAnswer != ans.userAnswer) {
                correct = false;
              }
              
              if (ans.userAnswer == true){
                mama = true;
              }

              return (
                < AnswerQuestion
                  questionNumber={ans.answerId}
                  answerNumber={ans.answerId}
                  onClick={onClick}
                  answer={ans.answerContent}
                  validation={ans.correctAnswer}
                  correct={mama}
                  mode={mode}
                ></AnswerQuestion>
              )
            })
            }
          </>
        );

        if (correct == true) {
          question.mark = parseFloat((100 / apiQuestions.length).toFixed(2));
          console.log (question.mark, "famsd");
        }

        question.answers = answer;

        if (correct == true) {
          question.miniCard = <><MiniCard
            color={1}
            onClick={clickCard}
            id={i}
            number={i}
            mode={mode}
          ></MiniCard></>
        } else {
          question.miniCard = <><MiniCard
            color={0}
            onClick={clickCard}
            id={i}
            number={i}
            mode={mode}
          ></MiniCard></>
        }

        i++;
        answers.push(question);
      }
      console.log(answers, "bine?");
      return answers;
    }
  }
};

export default QuizzRepository;

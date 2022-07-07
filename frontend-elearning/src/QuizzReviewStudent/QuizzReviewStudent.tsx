import React, { useEffect, useRef, useState } from "react";
import styles from "./QuizzReviewStudent.module.css";
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
import { Routes, Route } from "react-router-dom";
import {
  useLocation,
  useNavigate,
  useParams,
  Location,
} from "react-router-dom";
import QuizzRepository from "../Repositories/Quizz/QuizzRepository";
import UserAuth from "../models/UserAuth";

type Props = {};

const onClick = (questionNumber: number, answerNumber: number) => {
  console.log("OPA, adevarat", questionNumber, answerNumber);
};

export interface AnswersQuizzProps {
  id?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
  answers: React.ReactNode;
  number: number;
  mark: number;
  question: string;
  miniCard: React.ReactNode;
}

export default function QuizzReview({}: Props) {
  const navigate = useNavigate();
  const location: Location = useLocation();
  const [loggedUser, setLoggedUser]: [
    UserAuth,
    React.Dispatch<React.SetStateAction<UserAuth>>
  ] = useState({
    name: "",
    role: "",
    token: "",
  });

  var grade = 0;

  useEffect(() => {
    setLoggedUser((location.state as any).credentials);
    console.log(location, "token");
    getQuestions();
    grade = 0;
  }, []);

  const handleSubmit = () => {
    navigate(-1);
  };

  const getQuestions = async () => {
    console.log(location.state);
    let sections: AnswersQuizzProps[] = await QuizzRepository.getAllAnswers(
      (location.state as any).generalState.credentials.token,
      (location.state as any).sectionId,
      2
    );

    setQuestionsOk(sections);
  };

  const [qustionsOk, setQuestionsOk] = useState<AnswersQuizzProps[]>([
    {
      answers: <></>,
      mark: 0,
      number: 1,
      question: "You have no questions here.",
      miniCard: (
        <>
          <MiniCard color={0} id={1} number={1}></MiniCard>
        </>
      ),
    },
  ]);

  return (
    <div >
      <div className={`${styles["page"]}`}>
        <div className={`${styles["div--description__principal"]}`}>
          <span className={`${styles["text--title"]}`}>
            Course title: {(location.state as any).subjectTitle}
          </span>
          <span className={`${styles["text--normal__principal"]}`}>
            Section title: {(location.state as any).sectionTitle}
          </span>
        </div>

        <div className={`${styles["div--quizz"]}`}>
          <div className={`${styles["div--all--questions"]}`}>
            {qustionsOk.map((question: AnswersQuizzProps) => {
              grade += question.mark;
              return (
                <Element name={question.number.toString()}>
                  <div id={`${question.number}`}>
                    <QuestionQuizz
                      id={question.number.toString()}
                      question={question.question}
                      number={question.number}
                      answers={question.answers}
                      mode={2}
                      mark={question.mark}
                    ></QuestionQuizz>
                  </div>
                </Element>
              );
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
              {qustionsOk.map((question: AnswersQuizzProps) => (
                <>{question.miniCard}</>
              ))}
            </div>
            <span className={`${styles["text--subtitle2"]}`}>
              Total Points: {grade}
            </span>
            <span
              onClick={submit}
              className={`${styles["paragraph_quiz--navaigation"]} ${styles["span-finish"]}`}
            >
              Back
            </span>
          </div>
        </div>
      </div>
      <Footer />
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

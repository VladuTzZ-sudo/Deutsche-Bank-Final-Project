import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./QuizzPlay.module.css";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import axios from "axios";
import MiniCard, { MiniCardProps } from "../components/QuizzMiniCard/MiniCard";
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
import QuizLiveTimer from "../QuizLiveTimer/QuizLiveTimer";

type Props = {};
export interface QuestionQuizzProps {
  id?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
  answers: React.ReactNode;
  number: number;
  question: string;
  miniCard: React.ReactNode;
  changeColor: any;
}

type HeaderProps = {
  children: React.ReactNode | React.ReactNode[];
};

let visitedAlready = false;

export default function QuizzListen({ }: Props) {
  const location: Location = useLocation();
  let navigate = useNavigate();
  console.log(location.state);
  const [quizInfo, setQuizzInfo] = useState();
  function sendQuizAnswersQuestion(payload: any) {
    let token = (location.state as any).generalState.credentials.token;
    console.log("MAMA");
    axios
      .post(
        "http://localhost:8080/sections/" +
        (location as any).state.sectionId +
        "/takenQuiz",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("CICA");
        navigate("/quizzFinishedPage", {
          state: {
            credentials: (location.state as any).generalState.credentials,
            sectionId: (location as any).state.sectionId,
            courseId: (location as any).state.courseId,
          },
        });
      })
      .catch((err) => {
        console.log("ERROR");
        alert(err.response.data);
      });
  }

  function handleSubmit() {
    scrollTo("Submit");
    visitedAlready = true;
    let answers = window.sessionStorage.getItem("answers")?.split("-");

    let payload: any = [];
    if (typeof answers !== "undefined") {
      for (let i of answers) {
        let sol = window.sessionStorage.getItem(i.toString());
        console.log("intrebare - ", i, "raspuns -", sol);
        payload.push({ answerId: sol, questionId: i });
      }

      sendQuizAnswersQuestion(payload);
    } else {
      sendQuizAnswersQuestion(payload);
    }
    console.log("HAM");
  }
  var ok = 0;
  const [loggedUser, setLoggedUser]: [
    UserAuth,
    React.Dispatch<React.SetStateAction<UserAuth>>
  ] = useState({
    name: "",
    role: "",
    token: "",
  });

  const onClick = (questionNumber: number, answerNumber: number) => {
    var question: QuestionQuizzProps | undefined =
      qustionsOk.at(questionNumber);
    if (typeof question !== "undefined") {
      let card: React.ReactNode = question.miniCard;
      console.log(card, "00");
    }
  };

  function getStartQuizz() {
    console.log(location.state);
    let token = (location.state as any).generalState.credentials.token;
    axios
      .get(
        "http://localhost:8080/sections/" +
        (location.state as any).sectionId +
        "/takenQuiz",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        window.sessionStorage.setItem("startTime", response.data);
        setQuizzInfo(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    if (visitedAlready == true) {
      if (typeof (location.state as any) === 'undefined') {
      } else {
        navigate("/quizzFinishedPage", {
          state: {
            credentials: (location.state as any).generalState.credentials,
            sectionId: (location as any).state.sectionId,
            courseId: (location as any).state.courseId,
          },
        });
      }

    } else {
      console.log("DIIDIOTIDIDIDI");
      getStartQuizz();
      setLoggedUser((location.state as any).credentials);
      console.log(location, "token");
      getQuestions();
      ok = 0;
    }
  }, []);

  const getQuestions = async () => {
    let sections: QuestionQuizzProps[] = await QuizzRepository.getQuestions(
      (location.state as any).generalState.credentials.token,
      (location.state as any).courseId,
      (location.state as any).sectionId
    );

    setQuestionsOk(sections);
  };

  const [qustionsOk, setQuestionsOk] = useState<QuestionQuizzProps[]>([
    {
      answers: <></>,
      number: 1,
      question: "Diagramele de interactiune se folosesc pentru a modela",
      miniCard: (
        <>
          <MiniCard color={0} id={1} number={1}></MiniCard>
        </>
      ),
      changeColor: () => {
        <>
          <MiniCard color={1} id={1} number={1}></MiniCard>
        </>;
      },
    },
  ]);

  return (
    <div>
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
                    ></QuestionQuizz>
                  </div>
                </Element>
              );
            })}

            <div className={`${styles["elemFlexCenter"]}`}>
              <Element name="Submit">
                <Button
                  text="Submit"
                  func={() => {
                    handleSubmit();
                  }}
                  type="1"
                />
              </Element>
            </div>
          </div>
          <div className={`${styles["div--squareNumbers2"]}`}>
            <QuizLiveTimer
              closedDate={new Date((location.state as any).closedTime)} // in minutes
              duration={(location.state as any).duration} // in minutes
              submitFunction={handleSubmit}
              starter={quizInfo}
            />
            <span className={`${styles["text--subtitle"]}`}>
              Quiz Navigation
            </span>
            <div className={`${styles["container-buttons"]}`}>
              {qustionsOk.map((question: QuestionQuizzProps) => (
                <>{question.miniCard}</>
              ))}
            </div>

            <span
              onClick={handleSubmit}
              className={`${styles["paragraph_quiz--navaigation"]} ${styles["span-finish"]}`}
            >
              Finish attempt
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function scrollTo(name: string) {
  scroller.scrollTo(name, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}

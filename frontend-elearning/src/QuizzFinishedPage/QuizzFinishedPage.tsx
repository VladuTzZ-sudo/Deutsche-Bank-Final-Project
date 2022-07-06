import React from "react";
import styles from "./QuizzListen.module.css";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FooterMain from "../FooterMain/FooterMain";
import NavBar from "../Navbar/NavBar";
import CustomNavLink from "../models/CustomNavLink";
import UserAuth from "../models/UserAuth";
import { Roles } from "../Constants/Constants";
type Props = {};

// Pentru get, ar trebuie sa trimit:
// id student
// id quizz
// acces Token
export default function QuizzFinishedPage({ }: Props) {
  let location = useLocation();
  let navigate = useNavigate();
  const [quizInfo, setQuizInfo] = useState({
    courseTitle: "Baze de date1",
    sectionTitle: "Baze de date relationale",
    quizTitle: "Verifcare bd relationale",
    durationQuiz: "20",
    endDateQuiz: "22-01-2022, 12:40",
    detailsQuiz: `Chestionarul contine 10 intrebari, 3 variante de raspuns, un singur raspuns corect. Intrebarile se parcurg secvential, fara posibilitate de revenire la intrebarea anterioara. Rezultatul este vizibil dupa inchiderea testului. Timpul de evaluare este de 10 minute. `,
    submittedDate: "Tuesday, 8 March 2022, 11:38 AM",
    quizMark: 9.0,
    isQuizEnded: 1,
  });
  const [loggedUser, setLoggedUser]: [
    UserAuth,
    React.Dispatch<React.SetStateAction<UserAuth>>
  ] = useState({
    name: "",
    role: "",
    token: "",
  });

  const navLinks = [
    { text: "Login", linkUrl: "/loginPage" },
    { text: "Register", linkUrl: "/registerPage" },
  ];

  const goToTeacherReportModule = () => {
    navigate(`/quizChart`, { state: location.state });
  };

  const goToSharedNotes = () => {
    navigate(`/sharedNotes`, { state: location.state });
  };

  const goToMainPage = () => {
    navigate(-1);
  };

  const onLogout = () => {
    sessionStorage.removeItem("isAuth");
    navigate(`/loginPage`, {});
    // TODO: delete navigation history
  };

  const studentLinks: CustomNavLink[] = [
    { text: "List sections", href: "/", onClick: goToMainPage },
    { text: "Show notes", href: "/", onClick: goToSharedNotes },
    { text: "Log out", href: "/", onClick: onLogout },
  ];

  function getDataForFinishedQuizPage() {
    let token = (location.state as any).credentials.token;
    console.log(location.state);
    axios
      .get(
        "http://localhost:8080/courses/" +
        (location.state as any).courseId +
        "/sections/" +
        (location.state as any).sectionId +
        "/takenQuiz",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setQuizInfo(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    // window.onpopstate = function (event) {
    //   window.history.go(1);
    // };
    getDataForFinishedQuizPage();
    setLoggedUser(location.state as UserAuth);
  }, []);
  return (
    <div className={`${styles["page-style"]}`}>
      <NavBar
        links={studentLinks}
      ></NavBar>

      <div className={`${styles["page"]}`}>
        <div className={`${styles["div--description__principal"]}`}>
          <span className={`${styles["text--title"]}`}>
            {quizInfo.courseTitle}
          </span>
          <div>
            <span className={`${styles["text--normal__principal2"]}`}>Section</span>
            <span className={`${styles["text--subtitle__principal"]}`}>
              {quizInfo.sectionTitle}
            </span>
          </div>
        </div>
        <div className={`${styles["div--incapsulation"]}`}>
          <div className={`${styles["div--description"]}`}>
            <div>
              <span className={`${styles["text--normal__principal3"]}`}>Quiz title</span>
              <span className={`${styles["text--subtitle__principal"]}`}>
                {quizInfo.quizTitle}{" "}
              </span>
            </div>
            <div>
            <span className={`${styles["text--normal__principal4"]}`}>Duration</span>
            <span className={`${styles["text--normal"]}`}>
              {quizInfo.durationQuiz} minutes
            </span>
            </div>
            <div>
            <span className={`${styles["text--normal__principal4"]}`}>Closed</span>
            <span className={`${styles["text--normal"]}`}>
              {new Date(quizInfo.endDateQuiz).toString()}
            </span>
            </div>
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
                <li className={`${styles["two"]}`}>Grade / 100</li>
                <li className={`${styles["three"]}`}>Review</li>
              </div>
              <div className={`${styles["div--dynamic-table_down"]}`}>
                <li className={`${styles["one"]}`}>
                  <span>Finished</span>
                  <span>
                    Submitted date:{" "}
                    {new Date(quizInfo.submittedDate).toString()}
                  </span>
                </li>
                <li className={`${styles["two"]}`}>{quizInfo.quizMark}</li>
                <li className={`${styles["three"]}`}>
                  {quizInfo.isQuizEnded == 0 ? (
                    "Not permitted"
                  ) : (
                    <Button
                      text="Review your test!"
                      func={() => {
                        navigate("/reviewQuizz", {
                          state: {
                            generalState: location.state,
                            subjectTitle: quizInfo.courseTitle,
                            sectionTitle: quizInfo.sectionTitle,
                            courseId: (location.state as any).courseId,
                            quizId: (location.state as any).quizId,
                            sectionId: (location.state as any).sectionId,
                          },
                        });
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
                    navigate("/courses/" + (location.state as any).courseId, {
                      state: (location.state as any).credentials,
                    });
                  }}
                  type="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMain />

    </div >
  );
}

function handleSubmit() {
  throw new Error("Function not implemented.");
}

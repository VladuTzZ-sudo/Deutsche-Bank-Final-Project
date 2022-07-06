import React from "react";
import styles from "./QuizzStartPage.module.css";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FooterMain from "../FooterMain/FooterMain";
import CustomNavLink from "../models/CustomNavLink";
import NavBar from "../Navbar/NavBar";
type Props = {};
// la get trebuie date:
// quizz ID
// token de acces!
export default function QuizStartPage({ }: Props) {
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
    <div className={`${styles["page-style"]}`}>
      <NavBar
        links={studentLinks}
      ></NavBar>
      <div className={`${styles["page"]}`}>
        <div className={`${styles["div--description__principal"]}`}>
          <span className={`${styles["text--title"]}`}>
            {quizInfo.subjectTitle}
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
                {quizInfo.duration} minutes
              </span>
            </div>
            <div>
              <span className={`${styles["text--normal__principal4"]}`}>Closed</span>
              <span className={`${styles["text--normal"]}`}>
                {new Date(quizInfo.endDate).toString()}
              </span>
            </div>
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
                  // window.onpopstate = function (event) {
                  //   window.history.go(1);
                  // };
                  navigate("/playQuizz", {
                    state: {
                      closedTime: quizInfo.endDate,
                      duration: quizInfo.duration,
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
          </div>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

function handleSubmit() {
  throw new Error("Function not implemented.");
}

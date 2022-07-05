import React from "react";
import { FormProvider } from "react-hook-form";
import useQuizzerForm from "./useQuizzerForm";
import QuizzerFormField from "./QuizzerFormField";
import styles from "./QuizzerForm.module.css";
import NavBar from "../Navbar/NavBar";
import FooterMain from "../FooterMain/FooterMain";
import {
  useLocation,
  useNavigate,
  useParams,
  Location,
} from "react-router-dom";
const QuizzerForm = () => {
  let navigate = useNavigate();
  const location: Location = useLocation();
  console.log(location.state);
  const { handleSubmit, methods } = useQuizzerForm(location.state);
  const navLinks = [
    { text: "Login", linkUrl: "/loginPage" },
    { text: "Register", linkUrl: "/registerPage" },
  ];

  return (
    <div>
      <NavBar links={navLinks} />
      <div className="container">
        <div className={styles["quizzTitle"]}>
          <h1 className={styles["quizz-Title"]}>Quizz Maker</h1>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <QuizzerFormField />
            <div className={styles["divInputs"]}>
              <button className={styles["addBtn"]} type="submit">
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
      <FooterMain />
    </div>
  );
};

export default QuizzerForm;

import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import CoursesList from "../../components/Courses/CoursesList/CoursesList";
import Course from "../../models/Course";
import "./global.css";
import styles from "./CoursesMainPage.module.css";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import UserScore from "../../models/UserScore";

const CoursesMainPage: FC = () => {
  const courses: Course[] = [
    {
      icon: faDisplay,
      title: "Machine Learning",
      description: "This content is intended to guide developers new to ML",
      progress: 0.3,
    },
    {
      icon: faDisplay,
      title: "Machine Learning",
      description: "This content is intended to guide developers new to ML",
      progress: 0.3,
    },
    {
      icon: faDisplay,
      title: "Machine Learning",
      description: "This content is intended to guide developers new to ML",
      progress: 0.3,
    },
    {
      icon: faDisplay,
      title: "Machine Learning",
      description: "This content is intended to guide developers new to ML",
      progress: 0.3,
    },
    {
      icon: faDisplay,
      title: "Machine Learning",
      description: "This content is intended to guide developers new to ML",
      progress: 0.3,
    },
    {
      icon: faDisplay,
      title: "Machine Learning",
      description: "This content is intended to guide developers new to ML",
      progress: 0.3,
    },
  ];

  const users: UserScore[] = [
    { name: "David Simpson", score: 789 },
    { name: "David Simpson", score: 150 },
    { name: "David Simpson", score: 6 },
    { name: "David Simpson", score: 2 },
    { name: "David Simpson", score: 2 },
    { name: "David Simpson", score: 2 },
    { name: "David Simpson", score: 2 },
    { name: "David Simpson", score: 2 },
    { name: "David Simpson", score: 2 },
    { name: "David Simpson", score: 2 },
  ];

  return (
    <div
      className={`${styles["container"]} ${styles["grid"]} ${styles["grid-3-cols"]}`}
    >
      <h1
        className={`${styles["header--primary"]} ${styles["margin-bot--md"]}`}
      >
        Courses
      </h1>
      <CoursesList
        className={`${styles["grid-row-2"]} ${styles["grid-col-span"]}`}
        courses={courses}
      ></CoursesList>
      <article className={styles["grid-row-3"]}>
        <h1
          className={`${styles["header--primary"]} ${styles["margin-bot--md"]} ${styles["margin-top--lg"]}`}
        >
          Leaderboard
        </h1>
        <Leaderboard participants={users}></Leaderboard>
      </article>
    </div>
  );
};

export default CoursesMainPage;

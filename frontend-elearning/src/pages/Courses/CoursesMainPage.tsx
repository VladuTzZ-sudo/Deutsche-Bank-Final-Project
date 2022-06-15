import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import CoursesList from "../../components/Courses/CoursesList/CoursesList";
import Course from "../../models/Course";
import "./global.css";
import styles from "./CoursesMainPage.module.css";

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

  return (
    <div className={styles["container"]}>
      <h1
        className={`${styles["header--primary"]} ${styles["margin-bot--md"]}`}
      >
        Courses
      </h1>
      <CoursesList courses={courses}></CoursesList>
      <div>
        <article>
          <h1
            className={`${styles["header--primary"]} ${styles["margin-bot--md"]} ${styles["margin-top--lg"]}`}
          >
            Leaderboard
          </h1>
        </article>
      </div>
    </div>
  );
};

export default CoursesMainPage;

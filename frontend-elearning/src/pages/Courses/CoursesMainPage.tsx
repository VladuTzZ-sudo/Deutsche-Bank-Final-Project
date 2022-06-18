import { faDisplay, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import React, { FC, useState } from "react";
import CoursesList from "../../components/Courses/CoursesList/CoursesList";
import Course from "../../models/Course";
import "./global.css";
import styles from "./CoursesMainPage.module.css";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import UserScore from "../../models/UserScore";
import ClassicButton from "../../components/Buttons/ClassicButton/ClassicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCourseModal from "../../components/Modals/AddCourseModal/AddCourseModal";

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

  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <React.Fragment>
      <div
        className={`${styles["container"]} ${styles["grid"]} ${styles["grid-3-cols"]}`}
      >
        <h1
          className={`${styles["header--primary"]} ${styles["align-self--center"]}`}
        >
          Courses
        </h1>
        <ClassicButton
          className={`${styles["grid-col-3"]} ${styles["btn-add"]}`}
          onClick={openModal}
        >
          <FontAwesomeIcon className={styles["btn__icon"]} icon={faBookOpen} />
          <span>ADD COURSE</span>
        </ClassicButton>
        <CoursesList
          className={`${styles["grid-row-2"]} ${styles["grid-col-span"]}`}
          courses={courses}
        ></CoursesList>
        <article className={styles["grid-row-3"]}>
          <h1
            className={`${styles["header--primary"]} ${styles["margin-bot--md"]}`}
          >
            Leaderboard
          </h1>
          <Leaderboard participants={users}></Leaderboard>
        </article>
      </div>
      {isModalOpened && <AddCourseModal onClose={closeModal}></AddCourseModal>}
    </React.Fragment>
  );
};

export default CoursesMainPage;

import { faDisplay, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import React, { FC, useEffect, useState } from "react";
import CoursesList from "../../../components/Courses/CoursesList/CoursesList";
import Course from "../../../models/Course";
import "../global.css";
import styles from "./CoursesMainPage.module.css";
import Leaderboard from "../../../components/Leaderboard/Leaderboard";
import UserScore from "../../../models/UserScore";
import ClassicButton from "../../../components/Buttons/ClassicButton/ClassicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCourseModal from "../../../components/Modals/AddCourseModal/AddCourseModal";
import { useLocation, Location } from "react-router-dom";
import UserAuth from "../../../models/UserAuth";
import { useJwt } from "react-jwt";
import Jwt from "../../../models/Jwt";
import NavBar from "../../../Navbar/NavBar";
import CustomNavLink from "../../../models/CustomNavLink";
import { Roles } from "../../../Constants/Constants";

const CoursesMainPage: FC = () => {
  const courses: Course[] = [
    {
      icon: faDisplay,
      title: "Machine Learning1",
      description: "This content is intended to guide developers new to ML",
      progress: 0.3,
    },
    {
      icon: faDisplay,
      title: "Machine Learning2",
      description: "This content is intended to guide developers new to ML",
      progress: 0.3,
    },
    {
      icon: faDisplay,
      title: "Machine Learning3",
      description: "This content is intended to guide developers new to ML",
      progress: 0.3,
    },
    {
      icon: faDisplay,
      title: "Machine Learning4",
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

  const studentLinks: CustomNavLink[] = [
    { text: "Listing courses", href: "#" },
    { text: "Show leaderboard", href: "#" },
    { text: "Show notes", href: "#" },
    { text: "Create note", href: "#" },
    { text: "Quiz results", href: "#" },
    { text: "Log out", href: "/" },
  ];

  const teacherLinks: CustomNavLink[] = [
    { text: "Add courses", href: "#" },
    { text: "Listing courses", href: "#" },
    { text: "Show leaderboard", href: "#" },
    { text: "Quiz results", href: "#" },
    { text: "Log out", href: "/" },
  ];

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [loggedUser, setLoggedUser]: [
    UserAuth,
    React.Dispatch<React.SetStateAction<UserAuth>>
  ] = useState({
    name: "",
    role: "",
    token: "",
  });

  const location: Location = useLocation();

  useEffect(() => {
    setLoggedUser(location.state as UserAuth);
  }, []);

  const openModal = (): void => {
    setIsModalOpened(true);
  };

  const closeModal = (): void => {
    setIsModalOpened(false);
  };

  const cardClickHandler = (e: any, course: Course) => {
    console.log(course);
  };

  return (
    <React.Fragment>
      <NavBar
        links={loggedUser.role === Roles.TEACHER ? teacherLinks : studentLinks}
      ></NavBar>
      <div
        className={`${styles["container"]} ${styles["grid"]} ${styles["grid-3-cols"]}`}
      >
        <div className={`${styles["courses-btns"]}`}>
          <h1
            className={`${styles["header--primary"]} ${styles["align-self--center"]}`}
          >
            Courses
          </h1>
          {loggedUser.role !== Roles.TEACHER ? null : (
            <ClassicButton
              className={`${styles["btn-add"]}`}
              onClick={openModal}
            >
              <FontAwesomeIcon
                className={styles["btn__icon"]}
                icon={faBookOpen}
              />
              <span className={styles["btn__text"]}>ADD COURSE</span>
            </ClassicButton>
          )}
        </div>
        <h1 className={`${styles["header--primary"]}`}>Leaderboard</h1>
        <CoursesList
          className={`${styles["courses__list"]}`}
          onCardClick={cardClickHandler}
          courses={courses}
        ></CoursesList>
        <Leaderboard participants={users}></Leaderboard>
      </div>
      {isModalOpened && (
        <AddCourseModal
          onClose={closeModal}
          className={styles["modal"]}
        ></AddCourseModal>
      )}
    </React.Fragment>
  );
};

export default CoursesMainPage;

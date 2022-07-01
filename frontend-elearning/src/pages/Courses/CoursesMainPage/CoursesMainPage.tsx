import { faDisplay, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import React, { FC, useEffect, useState } from "react";
import CoursesList from "../../../components/Courses/CoursesList/CoursesList";
import Course from "../../../models/Course/Course";
import styles from "./CoursesMainPage.module.css";
import Leaderboard from "../../../components/Leaderboard/Leaderboard";
import UserScore from "../../../models/UserScore";
import ClassicButton from "../../../components/Buttons/ClassicButton/ClassicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCourseModal from "../../../components/Modals/AddCourseModal/AddCourseModal";
import { useLocation, Location, useNavigate } from "react-router-dom";
import UserAuth from "../../../models/UserAuth";
import { useJwt } from "react-jwt";
import Jwt from "../../../models/Jwt";
import NavBar from "../../../Navbar/NavBar";
import CustomNavLink from "../../../models/CustomNavLink";
import { Roles } from "../../../Constants/Constants";
import CourseRepository from "../../../Repositories/Course/CourseRepository";
import { CourseService } from "../../../Services/Course/CourseService";
import CourseAddDTO from "../../../models/Course/CourseAddDTO";

const CoursesMainPage: FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
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
  const navigate = useNavigate();

  useEffect(() => {
    getCourses();
    setLoggedUser(location.state as UserAuth);
  }, []);

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

  const openModal = (): void => {
    setIsModalOpened(true);
  };

  const closeModal = (): void => {
    setIsModalOpened(false);
  };

  const cardClickHandler = (e: any, course: Course): void => {
    // TODO: Authorization
    navigate(`/courses/${course.id}`, { state: location.state });
  };

  const getCourses = async () => {
    const courses: Course[] = await CourseRepository.getCourses(
      (location.state as UserAuth).token
    );
    setCourses(courses);
  };

  const onLogout = () => {
    sessionStorage.removeItem("isAuth");
    navigate(`/loginPage`, {});
    // TODO: delete navigation history
  };

  const onAddCourse = async (title: string, description: string) => {
    const addedCourse: CourseAddDTO = await CourseService.addCourse(
      {
        name: title,
        description: description,
      },
      loggedUser.token
    );

    getCourses();
    // TODO: Exceptions + Validations
  };

  const studentLinks: CustomNavLink[] = [
    { text: "Show notes", href: "#" },
    { text: "Quiz results", href: "#" },
    { text: "Log out", href: "/", onClick: onLogout },
  ];

  const teacherLinks: CustomNavLink[] = [
    { text: "Listing courses", href: "#" },
    { text: "Quiz results", href: "#" },
    { text: "Log out", href: "/", onClick: onLogout },
  ];

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
          courses={courses!}
        ></CoursesList>
        <Leaderboard participants={users}></Leaderboard>
      </div>
      {isModalOpened && (
        <AddCourseModal
          title="ADD COURSE"
          onClose={closeModal}
          className={styles["modal"]}
          onSave={onAddCourse}
        ></AddCourseModal>
      )}
    </React.Fragment>
  );
};

export default CoursesMainPage;

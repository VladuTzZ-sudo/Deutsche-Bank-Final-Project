import React, { FC, useState } from "react";
import DataCard from "../../../components/DataCard/DataCard";
import DragFiles from "../../../components/DragFiles/DragFiles";
import styles from "./CourseDetailPage.module.css";
import "../global.css";
import ModalContainer from "../../../components/Modals/ModalContainer/ModalContainer";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../../Navbar/NavBar";
import CustomNavLink from "../../../models/CustomNavLink";
import filesTypeValidator from "../../../Services/Validation/Validator";
import { ACCEPTED_FILE_TYPES } from "../../../Constants/Constants";
import SectionCard from "../../../components/Courses/SectionCard/SectionCard";
import Section from "../../../models/Course/Section";
import SectionsList from "../../../components/Courses/SectionsList/SectionsList";

const CourseDetailPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const cardImage =
    process.env.PUBLIC_URL + "/assets/data-images/folder-blue-icon.png";

  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
    console.log(
      process.env.PUBLIC_URL + "/assets/data-images/folder-blue-icon.png"
    );
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const files = [
    { title: "File1", type: "" },
    { title: "File2", type: "" },
    { title: "File3", type: "" },
    { title: "File4", type: "" },
    { title: "File5", type: "" },
  ];

  const sectionMock: Section = {
    completed: true,
    title: "A brief introduction to JavaScript",
    description:
      "Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.",
    onImageClick: openModal,
  };

  const onLogout = () => {
    sessionStorage.removeItem("isAuth");
    navigate(`/loginPage`, {});
    // TODO: delete navigation history
  };

  // WILL BE REPLACED WITH OUTLET
  const studentLinks: CustomNavLink[] = [
    { text: "Show notes", href: "#" },
    { text: "Quiz results", href: "#" },
    { text: "Log out", href: "/", onClick: onLogout },
  ];

  const sectionsMock = [sectionMock, sectionMock, sectionMock];

  const teacherFilesValidator = (file: File) => {
    return filesTypeValidator(file, ACCEPTED_FILE_TYPES.TEACHER);
  };

  return (
    <React.Fragment>
      <NavBar links={studentLinks}></NavBar>
      <div className={styles["container"]}>
        <SectionsList
          className={styles["sections"]}
          sections={sectionsMock}
        ></SectionsList>
      </div>
      {isModalOpened && (
        <ModalContainer onClose={closeModal}>
          <DragFiles
            className={`${styles["container"]} ${styles["drag-container"]}`}
            data={files}
            validator={teacherFilesValidator}
          ></DragFiles>
        </ModalContainer>
      )}
    </React.Fragment>
  );
};

export default CourseDetailPage;

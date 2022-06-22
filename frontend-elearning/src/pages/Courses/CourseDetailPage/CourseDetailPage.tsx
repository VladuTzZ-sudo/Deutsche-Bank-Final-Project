import React, { FC, useState } from "react";
import DataCard from "../../../components/DataCard/DataCard";
import DragFiles from "../../../components/DragFiles/DragFiles";
import styles from "./CourseDetailPage.module.css";
import "../global.css";
import ModalContainer from "../../../components/Modals/ModalContainer/ModalContainer";
import { useParams } from "react-router-dom";
import NavBar from "../../../Navbar/NavBar";
import CustomNavLink from "../../../models/CustomNavLink";
import filesTypeValidator from "../../../Services/Validation/Validator";
import { ACCEPTED_FILE_TYPES } from "../../../Constants/Constants";

// WILL BE REPLACED WITH OUTLET
const studentLinks: CustomNavLink[] = [
  { text: "Listing courses", href: "#" },
  { text: "Show leaderboard", href: "#" },
  { text: "Show notes", href: "#" },
  { text: "Create note", href: "#" },
  { text: "Quiz results", href: "#" },
  { text: "Log out", href: "/" },
];

const CourseDetailPage: FC = () => {
  const cardImage =
    process.env.PUBLIC_URL + "/assets/data-images/folder-blue-icon.png";

  const [isModalOpened, setIsModalOpened] = useState(false);

  const { id } = useParams();

  const openModal = () => {
    setIsModalOpened(true);
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

  const mockData = {
    title: "",
    date: null,
    icon: "",
  };

  const teacherFilesValidator = (file: File) => {
    return filesTypeValidator(file, ACCEPTED_FILE_TYPES.TEACHER);
  };

  return (
    <React.Fragment>
      <NavBar links={studentLinks}></NavBar>
      <div className={styles["container"]}>
        <DataCard
          dataInfo={mockData}
          className={styles["data-container"]}
          onClick={openModal}
        ></DataCard>
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

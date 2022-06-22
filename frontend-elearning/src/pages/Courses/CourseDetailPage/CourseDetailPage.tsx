import React, { FC, useState } from "react";
import DataCard from "../../../components/DataCard/DataCard";
import DragFiles from "../../../components/DragFiles/DragFiles";
import styles from "./CourseDetailPage.module.css";
import "../global.css";
import ModalContainer from "../../../components/Modals/ModalContainer/ModalContainer";
import { useParams } from "react-router-dom";

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

  const files = ["sad", "sad", "sad", "sad"];

  const mockData = {
    title: "",
    date: null,
    icon: "",
  };

  return (
    <React.Fragment>
      <DataCard
        dataInfo={mockData}
        className={styles["data-container"]}
        onClick={openModal}
      ></DataCard>
      {isModalOpened && (
        <ModalContainer onClose={closeModal}>
          <DragFiles
            className={styles["drag-container"]}
            data={files}
          ></DragFiles>
        </ModalContainer>
      )}
    </React.Fragment>
  );
};

export default CourseDetailPage;

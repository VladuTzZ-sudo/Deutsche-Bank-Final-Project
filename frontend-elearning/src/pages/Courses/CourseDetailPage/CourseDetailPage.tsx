import { FC } from "react";
import DataCard from "../../../components/DataCard/DataCard";
import DragFiles from "../../../components/DragFiles/DragFiles";
import styles from "./CourseDetailPage.module.css";
import "../global.css";

const CourseDetailPage: FC = () => {
  const cardImage =
    process.env.PUBLIC_URL + "/assets/data-images/folder-blue-icon.png";

  const onDataClick = () => {
    console.log("salut");
  };

  // return <DragFiles className={styles["drag-container"]}></DragFiles>;
  return (
    <DataCard
      className={styles["data-container"]}
      onClick={onDataClick}
    ></DataCard>
  );
};

export default CourseDetailPage;

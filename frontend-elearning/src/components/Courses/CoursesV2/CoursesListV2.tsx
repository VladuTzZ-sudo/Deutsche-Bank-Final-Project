import { Dispatch, FC, SetStateAction } from "react";
import Course from "../../../models/Course/Course";
import Setting from "../../../models/Setting";
import CardV2 from "../CardV2/CardV2";
import styles from "./CoursesList.module.css";

interface ListProps {
  courses: Setting[];
  className?: string;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

const CoursesListV2: FC<ListProps> = (props) => {
  const courses: JSX.Element[] = props.courses.map((course) => (
    <li>
      <CardV2 color="#b3bae5" course={course} onClick={course.onClick} setRefresh={props.setRefresh}></CardV2>
    </li>
  ));
  console.log("NASTERE");
  return <ul className={`${styles["list"]} ${props.className}`}>{courses}</ul>;
};

export default CoursesListV2;

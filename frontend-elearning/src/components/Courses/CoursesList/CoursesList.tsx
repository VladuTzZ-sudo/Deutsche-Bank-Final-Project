import { FC } from "react";
import Course from "../../../models/Course";
import CourseCard from "../Card/CourseCard";
import styles from "./CoursesList.module.css";

interface ListProps {
  courses: Course[];
  className?: string;
}

const CoursesList: FC<ListProps> = (props) => {
  const courses: JSX.Element[] = props.courses.map((course) => (
    <li>
      <CourseCard color="#b3bae5" course={course}></CourseCard>
    </li>
  ));

  return <ul className={`${styles["list"]} ${props.className}`}>{courses}</ul>;
};

export default CoursesList;

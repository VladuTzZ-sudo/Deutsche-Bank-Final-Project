import { FC } from "react";
import Course from "../../../models/Course/Course";
import CourseCard from "../Card/CourseCard";
import styles from "./CoursesList.module.css";

interface ListProps {
  courses: Course[];
  onCardClick: (e: React.MouseEvent, course: Course) => void;
  className?: string;
}

const CoursesList: FC<ListProps> = (props) => {
  const courses: JSX.Element[] = props.courses.map((course, index) => (
    <li key={index}>
      <CourseCard
        color="#b3bae5"
        course={course}
        onClick={props.onCardClick}
      ></CourseCard>
    </li>
  ));

  return <ul className={`${styles["list"]} ${props.className}`}>{courses}</ul>;
};

export default CoursesList;

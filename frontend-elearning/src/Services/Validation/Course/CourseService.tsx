import {
  faDisplay,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Course from "../../../models/Course/Course";
import CourseAPI from "../../../models/Course/CourseAPI";

const CourseService = {
  getCourses: async (): Promise<CourseAPI[]> => {
    const courses: CourseAPI[] = [
      {
        id: 1,
        title: "Machine Learning1",
        description: "This content is intended to guide developers new to ML",
        teacherName: "",
      },
      {
        id: 2,
        title: "Machine Learning2",
        description: "This content is intended to guide developers new to ML",
        teacherName: "",
      },
      {
        id: 3,
        title: "Machine Learning3",
        description: "This content is intended to guide developers new to ML",
        teacherName: "",
      },
      {
        id: 4,
        title: "Machine Learning4",
        description: "This content is intended to guide developers new to ML",
        teacherName: "",
      },
    ];

    return courses;
  },
};

export { CourseService };

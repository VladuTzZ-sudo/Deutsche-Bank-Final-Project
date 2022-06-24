import {
  faDisplay,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { API_URLS } from "../../../Constants/Constants";
import Course from "../../../models/Course/Course";
import CourseAddDTO from "../../../models/Course/CourseAddDTO";
import CourseGetDTO from "../../../models/Course/CourseGetDTO";

const CourseService = {
  getCourses: async (authToken: string): Promise<CourseGetDTO[]> => {
    // const courses: CourseAPI[] = [
    //   {
    //     id: 1,
    //     title: "Machine Learning1",
    //     description: "This content is intended to guide developers new to ML",
    //     teacherName: "",
    //   },
    //   {
    //     id: 2,
    //     title: "Machine Learning2",
    //     description: "This content is intended to guide developers new to ML",
    //     teacherName: "",
    //   },
    //   {
    //     id: 3,
    //     title: "Machine Learning3",
    //     description: "This content is intended to guide developers new to ML",
    //     teacherName: "",
    //   },
    //   {
    //     id: 4,
    //     title: "Machine Learning4",
    //     description: "This content is intended to guide developers new to ML",
    //     teacherName: "",
    //   },
    // ];

    // TODO: Exceptions
    try {
      const coursesResponse = await fetch(API_URLS.GET_COURSES, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const courses = (await coursesResponse.json()) as CourseGetDTO[];

      return courses;
    } catch (e) {
      console.log(e);
      return [];
    }
  },

  addCourse: async (course: CourseAddDTO): Promise<CourseAddDTO> => {
    console.log("added");
    return course;
  },
};

export { CourseService };

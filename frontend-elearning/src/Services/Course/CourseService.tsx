import {
  faDisplay,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { API_URLS } from "../../Constants/Constants";
import Course from "../../models/Course/Course";
import CourseAddDTO from "../../models/Course/CourseAddDTO";
import CourseGetDTO from "../../models/Course/CourseGetDTO";
import PopularCourseGetDTO from "../../models/Course/PopularCourseGetDTO";
import SectionAddDTO from "../../models/Course/Section/SectionAddDTO";
import SectionAvgGrade from "../../models/Course/Section/SectionAvgGrade";
import SectionGetDTO from "../../models/Course/Section/SectionGetDTO";

const CourseService = {
  getCourses: async (authToken: string): Promise<CourseGetDTO[]> => {
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

  getPopularCourses: async (
    authToken: string
  ): Promise<PopularCourseGetDTO[]> => {
    try {
      const coursesResponse = await fetch(`${API_URLS.GET_POPULAR_COURSES}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const courses = (await coursesResponse.json()) as PopularCourseGetDTO[];

      return courses;
    } catch (e) {
      console.log(e);
      return [];
    }
  },

  // TODO: Exception handling
  addCourse: async (
    course: CourseAddDTO,
    authToken: string
  ): Promise<CourseAddDTO> => {
    console.log(course);

    try {
      const addResponse = await fetch(API_URLS.ADD_COURSE, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(course),
      });

      console.log("course added");

      return course;
    } catch (e) {
      console.log(e);
      return course;
    }
  },

  getSections: async (
    courseId: number,
    authToken: string
  ): Promise<SectionGetDTO[]> => {
    // TODO: Exceptions
    try {
      const sectionsResponse = await fetch(
        `${API_URLS.GET_COURSES}/${courseId}/sections`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      const sections = (await sectionsResponse.json()) as SectionGetDTO[];

      return sections;
    } catch (e) {
      console.log(e);
      return [];
    }
  },

  // TODO: Exception handling
  addSection: async (
    courseId: number,
    section: SectionAddDTO,
    authToken: string
  ): Promise<SectionAddDTO> => {
    console.log(section);

    try {
      const addResponse = await fetch(
        `${API_URLS.GET_COURSES}/${courseId}/sections`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(section),
        }
      );

      console.log("section added");

      return section;
    } catch (e) {
      console.log(e);
      return section;
    }
  },

  getAvgGradeForSections: async (
    courseName: string,
    authToken: string
  ): Promise<SectionAvgGrade[]> => {
    if (courseName === "Math Course") {
      return [
        {
          name: "section1",
          grade: 5,
        },
        {
          name: "section2",
          grade: 3,
        },
        {
          name: "section4",
          grade: 6,
        },
        {
          name: "section5",
          grade: 2,
        },
      ];
    } else {
      return [
        {
          name: "section1",
          grade: 1,
        },
        {
          name: "section2",
          grade: 5,
        },
        {
          name: "section4",
          grade: 2,
        },
        {
          name: "section5",
          grade: 4,
        },
      ];
    }
  },
};

export { CourseService };

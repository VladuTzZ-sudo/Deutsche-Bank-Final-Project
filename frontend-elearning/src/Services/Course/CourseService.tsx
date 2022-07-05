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
import UserScore from "../../models/UserScore";

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
    courseId: number,
    authToken: string
  ): Promise<SectionAvgGrade[]> => {
    try {
      const sectionsResponse = await fetch(
        `${API_URLS.STATISTICS_COURSES}/${courseId}/averageGrade`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      const grades = (await sectionsResponse.json()) as SectionAvgGrade[];

      return grades;
    } catch (e) {
      console.log(e);
      return [];
    }
  },

  getLeaderboardInfo: async (authToken: string): Promise<UserScore[]> => {
    try {
      const scoresResponse = await fetch(`${API_URLS.LEADERBOARD}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const scores = (await scoresResponse.json()) as UserScore[];

      return scores;
    } catch (e) {
      return [];
    }
  },
};

export { CourseService };

import Course from "../../models/Course/Course";
import CourseGetDTO from "../../models/Course/CourseGetDTO";
import Section from "../../models/Course/Section/Section";
import SectionGetDTO from "../../models/Course/Section/SectionGetDTO";
import { CourseService } from "../../Services/Course/CourseService";

// TODO: Exceptions
const CourseRepository = {
  getCourses: async (authToken: string): Promise<Course[]> => {
    const apiCourses: CourseGetDTO[] = await CourseService.getCourses(
      authToken
    );
    const courses: Course[] = [];

    for (let apiCourse of apiCourses) {
      const course: Course = apiCourse as unknown as Course;
      course.progress = 0.2;
      courses.push(course);
    }

    return courses;
  },

  getSections: async (courseId: number, authToken: string) => {
    const apiSections: SectionGetDTO[] = await CourseService.getSections(
      courseId,
      authToken
    );
    const sections: Section[] = [];

    for (let apiSection of apiSections) {
      const section: Section = apiSection as unknown as Section;

      //TODO: actual values
      section.description =
        "Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.";
      section.completed = true;
      sections.push(section);
    }

    return sections;
  },
};

export default CourseRepository;

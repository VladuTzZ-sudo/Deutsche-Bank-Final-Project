import Course from "../../models/Course/Course";
import CourseGetDTO from "../../models/Course/CourseGetDTO";
import Section from "../../models/Course/Section/Section";
import SectionGetDTO from "../../models/Course/Section/SectionGetDTO";
import FileData from "../../models/FileData";
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

  getSections: async (
    courseId: number,
    authToken: string
  ): Promise<Section[]> => {
    const apiSections: SectionGetDTO[] = await CourseService.getSections(
      courseId,
      authToken
    );
    const sections: Section[] = [];

    for (let apiSection of apiSections) {
      const section: Section = apiSection as unknown as Section;

      // Add file type based on name
      section.files?.map((file) => {
        const fileSplitted = file.name.split(".");
        file.type = fileSplitted[fileSplitted.length - 1];
        return file;
      });

      section.completed = true;
      sections.push(section);
    }

    return sections;
  },

  getFilesBySectionId: async (
    courseId: number,
    sectionId: number,
    authToken: string
  ): Promise<FileData[]> => {
    const apiSections: SectionGetDTO[] = await CourseService.getSections(
      courseId,
      authToken
    );

    for (let apiSection of apiSections) {
      const section: Section = apiSection as unknown as Section;

      if (section.id === sectionId) {
        const files = section.files!;
        files?.map((file) => {
          const fileSplitted = file.name.split(".");
          file.type = fileSplitted[fileSplitted.length - 1];
          return file;
        });

        return files;
      }
    }

    return [];
  },
};

export default CourseRepository;

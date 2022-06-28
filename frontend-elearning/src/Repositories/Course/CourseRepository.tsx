import Course from "../../models/Course/Course";
import CourseGetDTO from "../../models/Course/CourseGetDTO";
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
};

export default CourseRepository;

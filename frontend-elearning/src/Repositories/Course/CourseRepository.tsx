import Course from "../../models/Course/Course";
import CourseAPI from "../../models/Course/CourseAPI";
import { CourseService } from "../../Services/Validation/Course/CourseService";

const getCourses = async (): Promise<Course[]> => {
  const apiCourses: CourseAPI[] = await CourseService.getCourses();
  const courses: Course[] = [];

  for (let apiCourse of apiCourses) {
    const course: Course = apiCourse as unknown as Course;
    course.progress = 0.2;
    courses.push(course);
  }

  return courses;
};

export default getCourses;

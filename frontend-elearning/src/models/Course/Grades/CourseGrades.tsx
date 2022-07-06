import SectionGrades from "./SectionGrades";

interface CourseGrades {
  name: string;
  teacherName: string;
  description: string;
  rsectionDTOList: SectionGrades[];
}

export default CourseGrades;

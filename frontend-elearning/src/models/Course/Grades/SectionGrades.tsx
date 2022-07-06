import StudentGrades from "./StudentGrades";

interface SectionGrades {
  title: string;
  description: string;
  quizName: string;
  quizDescription: string;
  rcontentDTOList: StudentGrades[];
}

export default SectionGrades;

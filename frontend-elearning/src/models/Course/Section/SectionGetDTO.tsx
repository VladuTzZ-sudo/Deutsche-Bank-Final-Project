import FileData from "../../FileData";
import QuizGetDTO from "../../Quiz/QuizGetDTO";

interface SectionGetDTO {
  id: number;
  title: string;
  description: string;
  quiz: QuizGetDTO;
  files: FileData[];
}

export default SectionGetDTO;

import QuizGetDTO from "../../Quiz/QuizGetDTO";

interface SectionGetDTO {
  id: number;
  title: string;
  description: string;
  quiz: QuizGetDTO;
}

export default SectionGetDTO;

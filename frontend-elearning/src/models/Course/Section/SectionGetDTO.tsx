import QuizGetDTO from "../../Quiz/QuizGetDTO";

interface SectionGetDTO {
  id: number;
  title: string;
  quiz: QuizGetDTO;
}

export default SectionGetDTO;

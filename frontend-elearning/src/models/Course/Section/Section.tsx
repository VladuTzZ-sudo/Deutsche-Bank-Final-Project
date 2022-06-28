import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import QuizGetDTO from "../../Quiz/QuizGetDTO";

interface Section {
  id?: number;
  title: string;
  description: string;
  quiz?: QuizGetDTO;
  completed?: boolean;
  buttonText?: string;
  buttonIcon?: IconDefinition;
  onButtonClick?: React.MouseEventHandler;
  onImageClick?: React.MouseEventHandler;
}

export default Section;

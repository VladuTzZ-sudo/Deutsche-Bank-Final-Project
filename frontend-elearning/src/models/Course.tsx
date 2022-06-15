import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Course {
  icon: IconDefinition;
  title: string;
  description: string;
  progress: number;
}

export default Course;

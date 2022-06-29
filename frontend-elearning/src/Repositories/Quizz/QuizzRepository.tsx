import Course from "../../models/Course/Course";
import CourseGetDTO from "../../models/Course/CourseGetDTO";
import Section from "../../models/Course/Section/Section";
import SectionGetDTO from "../../models/Course/Section/SectionGetDTO";
import { CourseService } from "../../Services/Course/CourseService";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import QuizzQuestions from "../../models/Quiz/QuizQuestions";
import { QuizzGetDTO, QuizzPlayService } from "../../Services/QuizzPlayService/QuizzPlayService";

// TODO: Exceptions
const QuizzRepository = {
  getQuestions: async (authToken: string, courseId: string, sectionId: string): Promise<QuizzQuestions[]> => {
    
    const apiQuestions: QuizzGetDTO[] = await QuizzPlayService.getQuestions(
      authToken, courseId, sectionId);
      
    console.log(apiQuestions, "mama");
    
    const questions: QuizzQuestions[] = [];

    // for (let apiQuestion of apiQuestions) {
    //   console.log("AICI");
    //   //const question: QuizzQuestions = apiQuestion as unknown as QuizzQuestions;
    //   // course.progress = 0.2;
    //   //questions.push(question);
    // }

    return questions;
  }
};

export default QuizzRepository;

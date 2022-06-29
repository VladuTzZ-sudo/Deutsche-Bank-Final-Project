import {
    faDisplay,
    faHeartCircleCheck,
  } from "@fortawesome/free-solid-svg-icons";
  import { API_URLS } from "../../Constants/Constants";
  import Course from "../../models/Course/Course";
  import CourseAddDTO from "../../models/Course/CourseAddDTO";
  import CourseGetDTO from "../../models/Course/CourseGetDTO";
  import SectionAddDTO from "../../models/Course/Section/SectionAddDTO";
  import SectionGetDTO from "../../models/Course/Section/SectionGetDTO";

export interface AnswerQuestionDTO {
    id: number;
    answerContent: string;
    validation: boolean;
}

export interface QuizzGetDTO {
    id: number;
    contentQuestion: string;
    answers: AnswerQuestionDTO[];
}

const QuizzPlayService = {
    getQuestions: async (authToken: string, courseId: string, sectionId: string): Promise<QuizzGetDTO[]> => {
      try {
        const questionsResponse = await fetch(API_URLS.GET_QUESTIONS + "/" + courseId + "/sections/" + sectionId + "/quizPlay", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
  
        const questions = (await questionsResponse.json()) as QuizzGetDTO[];
  
        return questions;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  
    // TODO: Exception handling
    sendAnswers: async (
      course: CourseAddDTO,
      authToken: string
    ): Promise<CourseAddDTO> => {
      console.log(course);
  
      try {
        const addResponse = await fetch(API_URLS.ADD_COURSE, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(course),
        });
  
        console.log("course added");
  
        return course;
      } catch (e) {
        console.log(e);
        return course;
      }
    }
  };
  
  export { QuizzPlayService };

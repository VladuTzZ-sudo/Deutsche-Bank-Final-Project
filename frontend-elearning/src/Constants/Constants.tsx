enum Roles {
  STUDENT = "student",
  TEACHER = "teacher",
}

const ACCEPTED_FILE_TYPES = {
  STUDENT: [],
  TEACHER: ["png", "docx"],
};

const API_URLS = {
  GET_COURSES: "http://localhost:8080/courses",
  ADD_COURSE: "http://localhost:8080/courses", // restricted to teacher
  GET_QUESTIONS: "http://localhosst:8080/courses",
};

export { Roles, ACCEPTED_FILE_TYPES, API_URLS };

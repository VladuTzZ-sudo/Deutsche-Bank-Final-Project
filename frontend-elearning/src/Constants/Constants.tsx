enum Roles {
  STUDENT = "student",
  TEACHER = "teacher",
}

const ACCEPTED_FILE_TYPES = {
  STUDENT: ["png"],
  TEACHER: ["png", "docx"],
};

const API_URLS = {
  GET_COURSES: "http://localhost:8080/courses",
  GET_POPULAR_COURSES: "http://localhost:8080/statistics/popularCourses",
  STATISTICS_COURSES: "http://localhost:8080/statistics/courses",
  ADD_COURSE: "http://localhost:8080/courses", // restricted to teacher
  GET_QUESTIONS: "http://localhost:8080/courses",
  LEADERBOARD: "http://localhost:8080/statistics/leaderboard",
};

export { Roles, ACCEPTED_FILE_TYPES, API_URLS };

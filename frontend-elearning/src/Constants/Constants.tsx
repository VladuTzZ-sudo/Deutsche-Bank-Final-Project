enum Roles {
  STUDENT = "student",
  TEACHER = "teacher",
}

const ACCEPTED_FILE_TYPES = {
  STUDENT: [],
  TEACHER: ["image/png"],
};

const API_URLS = {
  GET_COURSES: "http://localhost:8080/courses",
};

export { Roles, ACCEPTED_FILE_TYPES, API_URLS };

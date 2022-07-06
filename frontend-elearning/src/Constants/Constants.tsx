import FileTypeImage from "../models/FileTypeImage";

enum Roles {
  STUDENT = "student",
  TEACHER = "teacher",
}

const ACCEPTED_FILE_TYPES = {
  STUDENT: ["png", "docx", "doc", "pdf", "mp4"],
  TEACHER: ["docx", "doc", "pdf", "mp4"],
};

const FILE_ICON: FileTypeImage[] = [
  { type: ["png"], icon: "file-types/image.png" },
  { type: ["pdf"], icon: "file-types/presentation.png" },
  { type: ["doc", "docx"], icon: "file-types/word.png" },
  { type: ["mp4"], icon: "file-types/video.png" },
];

const API_URLS = {
  GET_COURSES: "http://localhost:8080/courses",
  GET_POPULAR_COURSES: "http://localhost:8080/statistics/popularCourses",
  STATISTICS_COURSES: "http://localhost:8080/statistics/courses",
  ADD_COURSE: "http://localhost:8080/courses", // restricted to teacher
  GET_QUESTIONS: "http://localhost:8080/courses",
  LEADERBOARD: "http://localhost:8080/statistics/leaderboard",
  GET_STUDENT_FILES: "http://localhost:8080/files",
};

export { Roles, ACCEPTED_FILE_TYPES, API_URLS, FILE_ICON };

enum Roles {
  STUDENT = "student",
  TEACHER = "teacher",
}

const ACCEPTED_FILE_TYPES = {
  STUDENT: [],
  TEACHER: ["image/png"],
};

export { Roles, ACCEPTED_FILE_TYPES };

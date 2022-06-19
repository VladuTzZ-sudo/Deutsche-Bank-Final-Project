import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Login/LoginPage";
import QuizzPlay from "./QuizPlay/QuizzPlay";
import CoursesMainPage from "./pages/Courses/CoursesMainPage/CoursesMainPage";
import QuizzListen from "./QuizzListen/QuizzListen";
import RegisterPage from "./Register/RegisterPage";
import MainPage from "./MainPage/MainPage";
import CourseDetailPage from "./pages/Courses/CourseDetailPage/CourseDetailPage";

export default function App() {
  return (
    //<QuizzPlay></QuizzPlay>
    //<div className="App"><RegisterPage/></div>
    //<QuizzListen></QuizzListen>
    //<LoginPage></LoginPage>
    //<RegisterPage></RegisterPage>
    //<CoursesMainPage></CoursesMainPage>
    <CourseDetailPage></CourseDetailPage>
    //<MainPage />
  );
}

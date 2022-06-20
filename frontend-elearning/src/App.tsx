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
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    //<QuizzPlay></QuizzPlay>
    //<div className="App"><RegisterPage/></div>
    //<QuizzListen></QuizzListen>
    //<LoginPage></LoginPage>
    //<RegisterPage></RegisterPage>
    //<MainPage />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/registerPage" element={<RegisterPage />}></Route>
        <Route path="/student" element={<CoursesMainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

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
import QuizzMaker from "./QuizzMaker/QuizzMaker";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/loginPage" element={<LoginPage />}></Route>
				<Route path="/registerPage" element={<RegisterPage />}></Route>

				<Route path="/student" element={<CoursesMainPage />}></Route>

				<Route path="/play" element={<QuizzPlay></QuizzPlay>}></Route>

				<Route path="/listen" element={<QuizzListen></QuizzListen>}></Route>

				<Route path="/makeQuizz" element={<QuizzMaker></QuizzMaker>}></Route>
				{/* <QuizzMaker></QuizzMaker>
      <QuizzPlay></QuizzPlay>
      //<div className="App"><RegisterPage/></div>
      <QuizzListen></QuizzListen>
      //<LoginPage></LoginPage>
      //<RegisterPage></RegisterPage>
      <CoursesMainPage></CoursesMainPage></> */}
			</Routes>
		</BrowserRouter>
	);
}

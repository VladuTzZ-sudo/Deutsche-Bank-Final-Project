import React from 'react';
import './App.css';
import LoginPage from './Login/LoginPage';
import QuizzPlay from './QuizPlay/QuizzPlay';
import CoursesMainPage from './pages/Courses/CoursesMainPage';
import QuizzListen from './QuizzListen/QuizzListen';
import RegisterPage from './Register/RegisterPage';
import QuizzMaker from './QuizzMaker/QuizzMaker';

function App() {
  return (
    //<QuizzPlay></QuizzPlay>
    //<div className="App"><RegisterPage/></div>
    <>
      <QuizzMaker></QuizzMaker>
      <QuizzPlay></QuizzPlay>
      //<div className="App"><RegisterPage/></div>
      <QuizzListen></QuizzListen>
      //<LoginPage></LoginPage>
      //<RegisterPage></RegisterPage>
      <CoursesMainPage></CoursesMainPage></>
    );

}

export default App;

import Button from '../Button/Button';
import './RegisterPage.css';
import  { ChangeEvent, useState } from "react";



type UserRegisterCred = {
  email:string;
  password:string;
  firstName:string;
  lastName:string;
  role:string;
}

export default function RegisterPage() {

  const[userInput, setInput] = useState({
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    role:""
  });

  const handleChange = (event:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>) => { 
    setInput((prevState:UserRegisterCred) => ({
      ...prevState,
      [(event.target as HTMLInputElement).id]:(event.target as HTMLInputElement).value,
    }));
  };

  // const handleSubmit = (event:ChangeEvent<HTMLButtonElement>) {

  // }
  return (
    <div className='register-page'>
       
        <div className='register-page__form'>
        <h1 className='register-page__title'>Register your account!</h1>
            <label className='register-page__form__label' >Email</label>
            <input  onChange={handleChange} className="register-page__form__input-text" type="text" id="email"  placeholder="Your email is...." />
            <label className='register-page__form__label' >Password</label>
            <input   onChange={handleChange} className="register-page__form__input-text" type="text" id="password"  placeholder="Your password is...." />
            <label className='register-page__form__label' >First Name</label>
            <input  onChange={handleChange} className="register-page__form__input-text" type="text" id="firstName"  placeholder="Your first name is...." />
            <label className='register-page__form__label' >Last Name</label>
            <input onChange={handleChange} className="register-page__form__input-text" type="text" id="lastName"  placeholder="Your last name is...." />
            <label className='register-page__form__label' >Role</label>
            <select   onChange={handleChange} id="rol"  className="register-page__form__select" >
                <option value="NONE">Please select role</option>
                <option value="TEACHER">Teacher</option>
                <option value="STUDENT">Student</option>
            </select>
            <Button text='Register!' func={()=>{ console.log("Click!")}}/>
        </div>
    </div>
  )
}
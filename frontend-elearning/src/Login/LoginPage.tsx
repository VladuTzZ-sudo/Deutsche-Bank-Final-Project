import Button from '../Button/Button';
import './LoginPage.css';
import  { ChangeEvent, useState } from "react";
import axios from "axios";
type Props = {}
type UserLoginCred = {
  email:string;
  password:string;
}

export default function LoginPage({}: Props) {




  

  const[userInput, setInput] = useState({
    email:"",
    password:"",
  });

  const[beResources, setResources] = useState({
    JWT:"",
    idUser:"",
    prenumele:"",
  });
  function sendCredentials() {
    axios
      .post("http://localhost:8080/login", userInput)
      .then((response) => {
        
        
        console.log(response);
        alert(response.data);
        
      })
      .catch((err) => {alert(err.response.data);});
  };

  function flushForm() {
    setInput({
      email:"",
      password:"",
    });
    (document.getElementById("email") as HTMLInputElement).value="";
    (document.getElementById("password") as HTMLInputElement).value="";
  }


  const handleChange = (event:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>) => { 
    setInput((prevState:UserLoginCred) => ({
      ...prevState,
      [(event.target as HTMLInputElement).id]:(event.target as HTMLInputElement).value,
    }));
  };

  function isEmailValid(email:string){
    const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (!String(email).toLowerCase().match(regex)) {
       alert("Format of your email is not valid!");
       return false
    } else if(email.length<6 || email.length>40) {
       alert("Your email must have between 6 and 40 characters!");
       return false;
    }
    return true;
  }

  function isPasswordValid(password:string){
      
    if(password.length<5 || password.length>20) {
        alert("Your password must have between 5 and 20 characters!");
        return false;
    }
      return true;
  }
  
  function isUserInpuValid(){
    let ok:boolean;
    ok = false;

    ok = isEmailValid(userInput.email);
    if (ok === true) {
      ok = isPasswordValid(userInput.password);
    }
    
    return ok;
  }
  const handleSubmit = () =>{
      console.log(userInput);
      if (isUserInpuValid()) {
        sendCredentials();
      }
      
  };
  return (
    <div className='login-page'>
       
        <div className='login-page__form'>
        <h1 className='login-page__title'>Sign in to your account!</h1>
            <label className='login-page__form__label' >Email</label>
            <input  onChange={handleChange}  className="login-page__form__input-text" type="text" id="email"  placeholder="Your email is...." required/>
            <label className='login-page__form__label' >Password</label>
            <input  onChange={handleChange}  className="login-page__form__input-text" type="password" id="password"  placeholder="Your password is...." required/>
            
            <Button text='Sign in' func={()=>{ handleSubmit()}}></Button>
        </div>
    </div>
  )
}
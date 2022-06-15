import Button from '../Button/Button';
import './LoginPage.css';
type Props = {}

export default function LoginPage({}: Props) {
  return (
    <div className='login-page'>
       
        <div className='login-page__form'>
        <h1 className='login-page__title'>Sign in to your account!</h1>
            <label className='login-page__form__label' >Email</label>
            <input  className="login-page__form__input-text" type="text" id="email"  placeholder="Your email is...." required/>
            <label className='login-page__form__label' >Password</label>
            <input  className="login-page__form__input-text" type="text" id="password"  placeholder="Your password is...." required/>
            
            <Button text='Sign in' func={()=>{console.log("sign in")}}></Button>
        </div>
    </div>
  )
}
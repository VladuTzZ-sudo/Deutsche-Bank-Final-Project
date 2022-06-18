import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./NavBar.css";
import NavbarBtn from '../NavbarBtn/NavbarBtn';


export default function NavBar() {
    return (
        <div className='navbar'>
            <div className='col navbar-left'>
                <a href="/" className="nav-left-part">DB E-Learning App</a>
            </div>
            <div className='col navbar-right'>
                <NavbarBtn text="Login" href="/"/>
                <NavbarBtn text="Register" href="/"/>
            </div>
        </div>
    )
}
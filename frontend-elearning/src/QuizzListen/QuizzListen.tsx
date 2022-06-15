import React from 'react'
import './QuizzListen.css';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

type Props = {}

export default function QuizzListen({ }: Props) {
    return (
        <div>
            <div className="page">
                <nav className='nav'>
                    <ul>
                        <li>mana</li>
                        <li>mana</li>
                        <li>mana</li>
                        <li>mana</li>
                    </ul>
                </nav>
                <div className='div--description__principal'>
                    <span className='text--title'>03-ACS-L-A3-S2: Baze de date I (Seria CC - 2021)</span>
                    <span className='text--normal__principal'>Dashboard / My courses / 03-ACS-L-A3-S2-BD1-CC / 14 March - 20 March / Test_Cap2</span>
                </div>
                <div className='div--incapsulation'>
                    <div className='div--description'>
                        <span className='text--subtitle__principal'>Test_Cap2</span>
                        <span className='text--normal'>Opened: Tuesday, 15 March 2022, 11:30 AM</span>
                        <span className='text--normal'>Closed: Tuesday, 15 March 2022, 11:42 AM</span>
                    </div>
                    <div className='div--must-description'>
                        <p className='paragraph'>
                            <h4>Chestionarul contine 10 intrebari, 3 variante de raspuns, un singur raspuns corect.</h4>
                            <h4>Intrebarile se parcurg secvential, fara posibilitate de revenire la intrebarea anterioara.</h4>
                            <h4>Rezultatul este vizibil dupa inchiderea testului.</h4>
                            <h4>Timpul de evaluare este de 10 minute. </h4>
                        </p>
                        <div className='div--attemps-time'>
                            <ul className='list--parent'>
                                <span className='text--normal'>Attempts allowed: ?</span>
                                <span className='text--normal__attempt'>Time limit: ? mins</span>
                            </ul>
                        </div>
                        <div className='div--dynamic-info'>
                            <span className='text--subtitle'>Summary of your previous attempts</span>
                            <div className='div--dynamic-table_up'>
                                <li className='one'>State</li>
                                <li className='two'>Grade / 10.00</li>
                                <li className='three'>Review</li>
                            </div>
                            <div className='div--dynamic-table_down'>
                                <li className='one'>
                                    <span>Finished</span>
                                    <span>Submitted Tuesday, 8 March 2022, 11:38 AM</span>
                                </li>
                                <li className='two'>9.00</li>
                                <li className='three'>Not permitted</li>
                            </div>
                            <span className='text--finalgrade'>Your final grade for this quiz is 9.00/10.00.</span>
                            <span className='text--attempsAllowed'>No more attempts are allowed</span>
                            <div className="elemFlexCenter">
                                <Button text='Back to the course' func={() => { handleSubmit() }} type='1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

function handleSubmit() {
    throw new Error('Function not implemented.');
}

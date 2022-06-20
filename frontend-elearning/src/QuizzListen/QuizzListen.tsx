import React from 'react'
import styles from './QuizzListen.module.css';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

type Props = {}

export default function QuizzListen({ }: Props) {
    return (
        <div>
            <div className={`${styles["page"]}`}>
                <div className={`${styles["div--description__principal"]}`}>
                    <span className={`${styles["text--title"]}`}>03-ACS-L-A3-S2: Baze de date I (Seria CC - 2021)</span>
                    <span className={`${styles["text--normal__principal"]}`}>Dashboard / My courses / 03-ACS-L-A3-S2-BD1-CC / 14 March - 20 March / Test_Cap2</span>
                </div>
                <div className={`${styles["div--incapsulation"]}`}>
                    <div className={`${styles["div--description"]}`}>
                        <span className={`${styles["text--subtitle__principal"]}`}>Test_Cap2</span>
                        <span className={`${styles["text--normal"]}`}>Opened: Tuesday, 15 March 2022, 11:30 AM</span>
                        <span className={`${styles["text--normal"]}`}>Closed: Tuesday, 15 March 2022, 11:42 AM</span>
                    </div>
                    <div className={`${styles["div--must-description"]}`}>
                        <p className={`${styles["paragraph"]}`}>
                            <h4>Chestionarul contine 10 intrebari, 3 variante de raspuns, un singur raspuns corect.</h4>
                            <h4>Intrebarile se parcurg secvential, fara posibilitate de revenire la intrebarea anterioara.</h4>
                            <h4>Rezultatul este vizibil dupa inchiderea testului.</h4>
                            <h4>Timpul de evaluare este de 10 minute. </h4>
                        </p>
                        <div className={`${styles["div--attemps-time"]}`}>
                            <ul className={`${styles["list--parent"]}`}>
                                <span className={`${styles["text--normal"]}`}>Attempts allowed: ?</span>
                                <span className={`${styles["text--normal__attempt"]}`}>Time limit: ? mins</span>
                            </ul>
                        </div>
                        <div className={`${styles["div--dynamic-info"]}`}>
                            <span className={`${styles["text--subtitle"]}`}>Summary of your previous attempts</span>
                            <div className={`${styles["div--dynamic-table_up"]}`}>
                                <li className={`${styles["one"]}`}>State</li>
                                <li className={`${styles["two"]}`}>Grade / 10.00</li>
                                <li className={`${styles["three"]}`}>Review</li>
                            </div>
                            <div className={`${styles["div--dynamic-table_down"]}`}>
                                <li className={`${styles["one"]}`}>
                                    <span>Finished</span>
                                    <span>Submitted Tuesday, 8 March 2022, 11:38 AM</span>
                                </li>
                                <li className={`${styles["two"]}`}>9.00</li>
                                <li className={`${styles["three"]}`}>Not permitted</li>
                            </div>
                            <span className={`${styles["text--finalgrade"]}`}>Your final grade for this quiz is 9.00/10.00.</span>
                            <span className={`${styles["text--attempsAllowed"]}`}>No more attempts are allowed</span>
                            <div className={`${styles["elemFlexCenter"]}`}>
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

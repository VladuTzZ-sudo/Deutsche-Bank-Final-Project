import React from 'react'
import styles from './QuizzStartPage.module.css';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import{ useState } from 'react';

type Props = {}
// la get trebuie date:
// quizz ID
// token de acces!
export default function QuizStartPage({ }: Props) {
    const [quizInfo, setQuizzInfo] = useState({
        subjectTitle:"Baze de date1",
        sectionTitle: "Baze de date relationale",
        quizzTitle:"Verifcare bd relationale",
        durationQuiz:"20",
        endDateQuizz:"22-01-2022, 12:40",
        detailsQuizz:"Chestionarul contine 10 intrebari, 3 variante de raspuns, un singur raspuns corect.Intrebarile se parcurg secvential, fara posibilitate de revenire la intrebarea anterioara. Rezultatul este vizibil dupa inchiderea testului.Timpul de evaluare este de 10 minute. "
    });
    return (
        <div>
            <div className={`${styles["page"]}`}>
                <div className={`${styles["div--description__principal"]}`}>
                    <span className={`${styles["text--title"]}`}>{quizInfo.subjectTitle}</span>
                    <span className={`${styles["text--normal__principal"]}`}>Section: {quizInfo.sectionTitle}</span>
                </div>
                <div className={`${styles["div--incapsulation"]}`}>
                    <div className={`${styles["div--description"]}`}>
                        <span className={`${styles["text--subtitle__principal"]}`}>Quizz title: {quizInfo.quizzTitle} </span>
                        <span className={`${styles["text--normal"]}`}>Duration time: {quizInfo.durationQuiz} minutes</span>
                        <span className={`${styles["text--normal"]}`}>Closed: {quizInfo.endDateQuizz}</span>
                    </div>
                    <div className={`${styles["div--must-description"]}`}>
                        <p className={`${styles["paragraph"]}`}>
                            <h4>{quizInfo.detailsQuizz}</h4>
                        </p>
                        <div className={`${styles["div--attemps-time"]}`}>
                            <ul className={`${styles["list--parent"]}`}>
                                <span className={`${styles["text--normal"]}`}>Attempts allowed: 1</span>
                            </ul>
                        </div>
                        
                            <div className={`${styles["elemFlexCenter"]}`}>
                                <Button text='Attempt quizz' func={() => { handleSubmit() }} type='1' />
                            </div>
                            <div className={`${styles["elemFlexCenter"]}`}>
                                <Button text='Back to the course' func={() => { handleSubmit() }} type='1' />
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

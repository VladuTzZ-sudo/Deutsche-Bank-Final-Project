import React from 'react'
import styles from './QuizzPlay.module.css';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import MiniCard from '../components/QuizzMiniCard/MiniCard';
import Answer from '../QuizzMakerAlex/QuizComponents/Answer';
import AnswerQuestion from '../components/AnswerQuizz/AnswerQuestion';
import QuestionInfo from '../components/QuestionInfo/QuestionInfo';
import QuestionQuizz from '../components/QuestionQuizz/QuestionQuizz';

type Props = {}

export default function QuizzListen({ }: Props) {
    return (
        <div>
            <div className={`${styles["page"]}`}>
                <div className={`${styles["div--description__principal"]}`}>
                    <span className={`${styles["text--title"]}`}>03-ACS-L-A3-S2: Baze de date I (Seria CC - 2021)</span>
                    <span className={`${styles["text--normal__principal"]}`}>Dashboard / My courses / 03-ACS-L-A3-S2-BD1-CC / 14 March - 20 March / Test_Cap2</span>
                </div>

                <div className={`${styles["div--quizz"]}`}>
                    <div className={`${styles["div--all--questions"]}`}>
                        <QuestionQuizz question={'Diagramele de interactiune se folosesc pentru a modela'} number={1} answers={
                            <>
                                <AnswerQuestion answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>
                        <QuestionQuizz question={'Dezvoltarea pe bază de prototip'} number={2} answers={
                            <>
                                <AnswerQuestion answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>
                        <QuestionQuizz question={'Diagramele de interactiune se folosesc pentru a modela'} number={3} answers={
                            <>
                                <AnswerQuestion answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>
                        <QuestionQuizz question={'Diagramele de interactiune se folosesc pentru a modela'} number={4} answers={
                            <>
                                <AnswerQuestion answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>

                        <div className={`${styles["elemFlexCenter"]}`}>
                            <Button text='Submit' func={() => { handleSubmit() }} type='1' />
                        </div>
                    </div>
                    <div className={`${styles["div--squareNumbers"]}`}>
                        <span className={`${styles["text--subtitle"]}`}>Quiz Navigation</span>
                        <div className={`${styles["container-buttons"]}`}>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                        </div>

                        <span className={`${styles["paragraph_quiz--navaigation"]}`}>Finish attempt</span>
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

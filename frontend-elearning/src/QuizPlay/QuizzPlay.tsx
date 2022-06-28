import React, { useState } from 'react'
import styles from './QuizzPlay.module.css';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import MiniCard from '../components/QuizzMiniCard/MiniCard';
import Answer from '../QuizzMakerAlex/QuizComponents/Answer';
import AnswerQuestion from '../components/AnswerQuizz/AnswerQuestion';
import QuestionInfo from '../components/QuestionInfo/QuestionInfo';
import QuestionQuizz from '../components/QuestionQuizz/QuestionQuizz';

type Props = {}

const onClick = (questionNumber: number, answerNumber: number) => {
    console.log("OPA, adevarat", questionNumber, answerNumber);
};

interface QuestionQuizzProps {
    onClick?: React.MouseEventHandler;
    className?: string;
    children?: React.ReactNode;
    answers: React.ReactNode;
    number: number;
    question: string;
}

const questions: QuestionQuizzProps[] = [
    { answers: <></>, number: 1, question: 'Diagramele de interactiune se folosesc pentru a modela' },
    { answers: <></>, number: 2, question: 'Dezvoltarea pe bază de prototip' },
    { answers: <></>, number: 3, question: 'Diagramele de interactiune se folosesc pentru a modela' },
    { answers: <></>, number: 4, question: 'Diagramele de interactiune se folosesc pentru a modela' },
    { answers: <></>, number: 5, question: 'Diagramele de interactiune se folosesc pentru a modela' },
    { answers: <></>, number: 6, question: 'Diagramele de interactiune se folosesc pentru a modela' },
    { answers: <></>, number: 7, question: 'Diagramele de interactiune se folosesc pentru a modela' },
    { answers: <></>, number: 8, question: 'Diagramele de interactiune se folosesc pentru a modela' }
];

export default function QuizzListen({ }: Props) {
    const [questionsInfo, setQuestionsInfo] = useState({
        questions: [
            { answers: <></>, number: 1, question: 'Diagramele de interactiune se folosesc pentru a modela' },
            { answers: <></>, number: 2, question: 'Dezvoltarea pe bază de prototip' },
            { answers: <></>, number: 3, question: 'Diagramele de interactiune se folosesc pentru a modela' },
            { answers: <></>, number: 4, question: 'Diagramele de interactiune se folosesc pentru a modela' },
            { answers: <></>, number: 5, question: 'Diagramele de interactiune se folosesc pentru a modela' },
            { answers: <></>, number: 6, question: 'Diagramele de interactiune se folosesc pentru a modela' },
            { answers: <></>, number: 7, question: 'Diagramele de interactiune se folosesc pentru a modela' },
            { answers: <></>, number: 8, question: 'Diagramele de interactiune se folosesc pentru a modela' }
        ],
        

    });
    
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
                                <AnswerQuestion questionNumber={1} answerNumber={1}
                                    onClick={onClick} answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion questionNumber={1} answerNumber={2}
                                    onClick={onClick} answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={1} answerNumber={3}
                                    onClick={onClick} answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={1} answerNumber={4}
                                    onClick={onClick} answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>
                        <QuestionQuizz question={'Dezvoltarea pe bază de prototip'} number={2} answers={
                            <>
                                <AnswerQuestion questionNumber={2} answerNumber={1}
                                    onClick={onClick} answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion questionNumber={2} answerNumber={2}
                                    onClick={onClick} answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={2} answerNumber={3}
                                    onClick={onClick} answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={2} answerNumber={4}
                                    onClick={onClick} answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>
                        <QuestionQuizz question={'Diagramele de interactiune se folosesc pentru a modela'} number={3} answers={
                            <>
                                <AnswerQuestion questionNumber={3} answerNumber={1}
                                    onClick={onClick} answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion questionNumber={3} answerNumber={2}
                                    onClick={onClick} answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={3} answerNumber={3}
                                    onClick={onClick} answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={3} answerNumber={4}
                                    onClick={onClick} answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>
                        <QuestionQuizz question={'Diagramele de interactiune se folosesc pentru a modela'} number={4} answers={
                            <>
                                <AnswerQuestion questionNumber={4} answerNumber={1}
                                    onClick={onClick} answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion questionNumber={4} answerNumber={2}
                                    onClick={onClick} answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={4} answerNumber={3}
                                    onClick={onClick} answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={4} answerNumber={4}
                                    onClick={onClick} answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>
                        <QuestionQuizz question={'Diagramele de interactiune se folosesc pentru a modela'} number={5} answers={
                            <>
                                <AnswerQuestion questionNumber={5} answerNumber={1}
                                    onClick={onClick} answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion questionNumber={5} answerNumber={2}
                                    onClick={onClick} answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={5} answerNumber={3}
                                    onClick={onClick} answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={5} answerNumber={4}
                                    onClick={onClick} answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>
                        <QuestionQuizz question={'Diagramele de interactiune se folosesc pentru a modela'} number={6} answers={
                            <>
                                <AnswerQuestion questionNumber={6} answerNumber={1}
                                    onClick={onClick} answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion questionNumber={6} answerNumber={2}
                                    onClick={onClick} answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={6} answerNumber={3}
                                    onClick={onClick} answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={6} answerNumber={4}
                                    onClick={onClick} answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>
                        <QuestionQuizz question={'Diagramele de interactiune se folosesc pentru a modela'} number={7} answers={
                            <>
                                <AnswerQuestion questionNumber={7} answerNumber={1}
                                    onClick={onClick} answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion questionNumber={7} answerNumber={2}
                                    onClick={onClick} answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={7} answerNumber={3}
                                    onClick={onClick} answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={7} answerNumber={4}
                                    onClick={onClick} answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>
                        <QuestionQuizz question={'Diagramele de interactiune se folosesc pentru a modela'} number={8} answers={
                            <>
                                <AnswerQuestion questionNumber={8} answerNumber={1}
                                    onClick={onClick} answer='I have a bike'></AnswerQuestion>
                                <AnswerQuestion questionNumber={8} answerNumber={2}
                                    onClick={onClick} answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={8} answerNumber={3}
                                    onClick={onClick} answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
                                <AnswerQuestion questionNumber={8} answerNumber={4}
                                    onClick={onClick} answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
                            </>
                        }></QuestionQuizz>

                        <div className={`${styles["elemFlexCenter"]}`}>
                            <Button text='Submit' func={() => { handleSubmit() }} type='1' />
                        </div>
                    </div>
                    <div className={`${styles["div--squareNumbers"]}`}>
                        <span className={`${styles["text--subtitle"]}`}>Quiz Navigation</span>
                        <div className={`${styles["container-buttons"]}`}>
                            <MiniCard number={1}></MiniCard>
                            <MiniCard number={2}></MiniCard>
                            <MiniCard number={3}></MiniCard>
                            <MiniCard number={4}></MiniCard>
                            <MiniCard number={5}></MiniCard>
                            <MiniCard number={6}></MiniCard>
                            <MiniCard number={7}></MiniCard>
                            <MiniCard number={8}></MiniCard>
                        </div>

                        <span onClick={handleSubmit} className={`${styles["paragraph_quiz--navaigation"]}`}>Finish attempt</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

function handleSubmit() {
    console.log("mamamam");
}

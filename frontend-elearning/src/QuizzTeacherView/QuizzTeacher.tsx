import React, { useEffect, useRef, useState } from 'react'
import styles from './QuizzTeacher.module.css';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import MiniCard from '../components/QuizzMiniCard/MiniCard';
import Answer from '../QuizzMakerAlex/QuizComponents/Answer';
import AnswerQuestion from '../components/AnswerQuizz/AnswerQuestion';
import QuestionInfo from '../components/QuestionInfo/QuestionInfo';
import QuestionQuizz from '../components/QuestionQuizz/QuestionQuizz';
import { JsxEmit, textSpanContainsTextSpan } from 'typescript';
import {
    useLocation,
    useNavigate,
    useParams,
    Location,
} from "react-router-dom";
import QuizzRepository from '../Repositories/Quizz/QuizzRepository';
import UserAuth from '../models/UserAuth';

type Props = {}

const onClick = (questionNumber: number, answerNumber: number) => {
    console.log("OPA, adevarat", questionNumber, answerNumber);
};

export interface QuestionQuizzProps {
    id?: string;
    onClick?: React.MouseEventHandler;
    className?: string;
    children?: React.ReactNode;
    answers: React.ReactNode;
    number: number;
    question: string;
    miniCard: React.ReactNode;
};

type HeaderProps = {
    children: React.ReactNode | React.ReactNode[];
};

function Header(props: HeaderProps) {
    return <div>{props.children}</div>;
}

export default function QuizzTeacher({ }: Props) {
    const location: Location = useLocation();

    const [loggedUser, setLoggedUser]: [
        UserAuth,
        React.Dispatch<React.SetStateAction<UserAuth>>
    ] = useState({
        name: "",
        role: "",
        token: "",
    });

    useEffect(() => {
        setLoggedUser(location.state as UserAuth);
        console.log(location, "token");
        getQuestions();
    }, []);

    const getQuestions = async () => {
        let sections: QuestionQuizzProps[] = await QuizzRepository.getQuestions(
            loggedUser.token,
            "1",
            "1"
        );

        setQuestionsOk(sections);
    };

    const [qustionsOk, setQuestionsOk] = useState<QuestionQuizzProps[]>([{
        answers: <>
            <AnswerQuestion questionNumber={1} answerNumber={1}
                onClick={onClick} answer='I have a bike'></AnswerQuestion>
            <AnswerQuestion questionNumber={1} answerNumber={2}
                onClick={onClick} answer='Incurajează implicarea clientului în procesul de dezvoltare.'></AnswerQuestion>
            <AnswerQuestion questionNumber={1} answerNumber={3}
                onClick={onClick} answer='Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.'></AnswerQuestion>
            <AnswerQuestion questionNumber={1} answerNumber={4}
                onClick={onClick} answer='Acesta este raspunsul meu ahahah.'></AnswerQuestion>
        </>, number: 1, question: 'Diagramele de interactiune se folosesc pentru a modela',
        miniCard: <>
            <MiniCard number={1}></MiniCard>
        </>
    }]);

    return (
        <div>
            <div className={`${styles["page"]}`}>
                <div className={`${styles["div--description__principal"]}`}>
                    <span className={`${styles["text--title"]}`}>NUME - TITLU CURS</span>
                    <span className={`${styles["text--normal__principal"]}`}>Titlu Sectiune - nume QUIZ</span>
                </div>

                <div className={`${styles["div--quizz"]}`}>
                    <div className={`${styles["div--all--questions"]}`}>

                        {qustionsOk.map((question: QuestionQuizzProps) =>
                            <div id={`${question.number}`}>
                                <QuestionQuizz id={question.number.toString()} question={question.question} number={question.number} answers={question.answers}></QuestionQuizz>
                            </div>
                        )}

                        <div className={`${styles["elemFlexCenter"]}`}>
                            <Button text='Submit' func={() => { handleSubmit() }} type='1' />
                        </div>

                    </div>
                    <div className={`${styles["div--squareNumbers2"]}`}>
                        <span className={`${styles["text--subtitle"]}`}>Quiz Navigation</span>
                        <div className={`${styles["container-buttons"]}`}>
                            {qustionsOk.map((question: QuestionQuizzProps) =>
                                <a href={`#${question.number}`}>{question.miniCard}</a>
                            )}
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
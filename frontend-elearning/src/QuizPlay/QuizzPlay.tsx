import React from 'react'
import styles from './QuizzPlay.module.css';
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

                <div className={`${styles["div--quizz"]}`}>
                    <div className={`${styles["div--all--questions"]}`}>
                        <div className={`${styles["div--question--and--info"]}`}>
                            <div className={`${styles["div--question--info"]}`}>
                                <span className={`${styles["paragraph_general"]}`}>Question <span className={`${styles["paragraph_number"]}`}>
                                    1</span></span>
                                <span className={`${styles["paragraph_general"]}`}>Not complete</span>
                                <span className={`${styles["paragraph_general"]}`}>Marked out of 1.00</span>
                                <span className={`${styles["paragraph_general"]}`}>Flag question</span>
                            </div>
                            <div className={`${styles["div--question"]}`}>
                                <span className={`${styles["paragraph_navi"]}`}>Diagramele de interactiune se folosesc pentru a modela</span>
                                <div className={`${styles["answer_special"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label> I have a bike</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>
                                        Incurajează implicarea clientului în procesul de dezvoltare.</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>
                                        Produsul software este dezvoltat într-un singur ciclu de dezvoltare.</label>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles["div--question--and--info"]}`}>
                            <div className={`${styles["div--question--info"]}`}>
                                <span className={`${styles["paragraph_special"]}`}>Question <span className={`${styles["paragraph_number"]}`}>2</span></span>
                                <span className={`${styles["paragraph_general"]}`}>Not complete</span>
                                <span className={`${styles["paragraph_general"]}`}>Marked out of 1.00</span>
                                <span className={`${styles["paragraph_special"]}`}>Flag question</span>
                            </div>
                            <div className={`${styles["div--question"]}`}>
                                <span className={`${styles["paragraph_navi"]}`}>Dezvoltarea pe bază de prototip</span>
                                <div className={`${styles["answer_special"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>Rolul prototipului este de a uşura extragerea cerinṭelor</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>Prototipul implementează functionalităṭile viitorului produs şi interfaṭa utilizator</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>Este un model de dezvoltare iterativă</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>Produce mai multe prototipuri care sunt versiuni intermediare ale produsului final
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles["div--question--and--info"]}`}>
                            <div className={`${styles["div--question--info"]}`}>
                                <span className={`${styles["paragraph_general"]}`}>Question <span className={`${styles["paragraph_number"]}`}>3</span></span>
                                <span className={`${styles["paragraph_general"]}`}>Not complete</span>
                                <span className={`${styles["paragraph_general"]}`}>Marked out of 1.00</span>
                                <span className={`${styles["paragraph_general"]}`}>Flag question</span>
                            </div>
                            <div className={`${styles["div--question"]}`}>
                                <span className={`${styles["paragraph_navi"]}`}>Diagramele de interactiune se folosesc pentru a modela</span>
                                <div className={`${styles["answer_special"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label> I have a bike</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>
                                        Incurajează implicarea clientului în procesul de dezvoltare.</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>
                                        Produsul software este dezvoltat într-un singur ciclu de dezvoltare.</label>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles["div--question--and--info"]}`}>
                            <div className={`${styles["div--question--info"]}`}>
                                <span className={`${styles["paragraph_general"]}`}>Question <span className={`${styles["paragraph_number"]}`}>4</span></span>
                                <span className={`${styles["paragraph_general"]}`}>Not complete</span>
                                <span className={`${styles["paragraph_general"]}`}>Marked out of 1.00</span>
                                <span className={`${styles["paragraph_general"]}`}>Flag question</span>
                            </div>
                            <div className={`${styles["div--question"]}`}>
                                <span className={`${styles["paragraph_navi"]}`}>Diagramele de interactiune se folosesc pentru a modela</span>
                                <div className={`${styles["answer_special"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label> I have a bike</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>
                                        Incurajează implicarea clientului în procesul de dezvoltare.</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>Planurile de test sunt realizate în etapele de dezvoltare anterioare codificării.</label>
                                </div>
                                <div className={`${styles["answer"]}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label>
                                        Produsul software este dezvoltat într-un singur ciclu de dezvoltare.</label>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles["elemFlexCenter"]}`}>
                            <Button text='Submit' func={() => { handleSubmit() }} type='1' />
                        </div>
                    </div>
                    <div className={`${styles["div--squareNumbers"]}`}>
                        <span className={`${styles["text--subtitle"]}`}>Quiz Navigation</span>
                        <div className={`${styles["container-buttons"]}`}>
                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>

                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles['lowerButton']}`}>
                                    2
                                </div>
                            </div>

                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>

                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>
                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>

                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>

                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>

                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>
                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>

                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>

                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>

                            <div className={`${styles["button"]}`}>
                                <div className={`${styles["upperButton"]}`}>
                                    1
                                </div>
                                <div className={`${styles["lowerButton"]}`}>
                                    2
                                </div>
                            </div>
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

import React, { useState } from 'react'
import styles from './QuizzMaker.module.css';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import { faAngleRight, faDisplay, faAngleDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import Setting from '../models/Setting';
import CoursesListV2 from '../components/Courses/CoursesV2/CoursesListV2';
import { icon } from '@fortawesome/fontawesome-svg-core';

type Props = {}

export default function QuizzMaker({ }: Props) {
    const [refresh, setRefresh] = useState(false);
    const settings: Setting[] = [
        {
            icon: faAngleRight,
            second_icon: faAngleDown,
            title: "General",
            onClick: () => {
                console.log("lolo");
                settings[0].icon = faAngleDown;
                settings[1].title = "mama";
                setRefresh(!refresh);
                console.log(settings[1].title, "OK");
            }
        },
        {
            icon: faAngleRight,
            second_icon: faAngleDown,
            title: "Timing",
            onClick: () => {
                console.log("HAHAHAH", settings[1].title);
            }
        },
        {
            icon: faAngleRight,
            second_icon: faAngleDown,
            title: "Grade",
            onClick: () => {
                console.log("HAHAHAH");
                settings[1].title = "mama";

            }
        },
        {
            icon: faAngleRight,
            second_icon: faAngleDown,
            title: "Layout",
            onClick: () => {
                console.log("HAHAHAH");
                settings[1].title = "mama";

            }
        },
        {
            icon: faAngleRight,
            second_icon: faAngleDown,
            title: "Question Behavior",
            onClick: () => {
                console.log("HAHAHAH");
                settings[1].title = "mama";

            }
        },
        {
            icon: faAngleRight,
            second_icon: faAngleDown,
            title: "Review options",
            onClick: () => {
                console.log("HAHAHAH");
                settings[1].title = "mama";

            }
        }
    ];

    return (
        <div>
            <div className={`${styles["page"]}`}>
                <div className={`${styles["div--description__principal"]}`}>
                    <span className={`${styles["text--title"]}`}>Add Course</span>
                    <span className={`${styles["text--normal__principal"]}`}>Dashboard / My courses / 03-ACS-L-A3-S2-BD1-CC / 14 March - 20 March / Test_Cap2</span>
                </div>
                <div className={`${styles["div--incapsulation"]}`}>
                    {/* <div className={`${styles["div--description"]}`}>
                        <span className={`${styles["text--subtitle__principal"]}`}>Test_Cap2</span>
                        <span className={`${styles["text--normal"]}`}>Opened: Tuesday, 15 March 2022, 11:30 AM</span>
                        <span className={`${styles["text--normal"]}`}>Closed: Tuesday, 15 March 2022, 11:42 AM</span>
                    </div> */}
                    <div className={`${styles["div--must-description"]}`}>
                        <CoursesListV2
                            className={`${styles["grid-row-2 grid-col-span"]}`}
                            courses={settings}
                            setRefresh={setRefresh}
                        ></CoursesListV2>
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

import React, { FC, useEffect, useState } from "react";
import DataCard from "../../../components/DataCard/DataCard";
import DragFiles from "../../../components/DragFiles/DragFiles";
import styles from "./CourseDetailPage.module.css";
import "../global.css";
import ModalContainer from "../../../components/Modals/ModalContainer/ModalContainer";
import {
	useLocation,
	useNavigate,
	useParams,
	Location,
} from "react-router-dom";
import NavBar from "../../../Navbar/NavBar";
import CustomNavLink from "../../../models/CustomNavLink";
import filesTypeValidator from "../../../Services/Validation/Validator";
import { ACCEPTED_FILE_TYPES, Roles } from "../../../Constants/Constants";
import SectionCard from "../../../components/Courses/SectionCard/SectionCard";
import Section from "../../../models/Course/Section/Section";
import SectionsList from "../../../components/Courses/SectionsList/SectionsList";
import UserAuth from "../../../models/UserAuth";
import { CourseService } from "../../../Services/Course/CourseService";
import CourseRepository from "../../../Repositories/Course/CourseRepository";
import ClassicButton from "../../../components/Buttons/ClassicButton/ClassicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import AddCourseModal from "../../../components/Modals/AddCourseModal/AddCourseModal";
import SectionAddDTO from "../../../models/Course/Section/SectionAddDTO";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";

const CourseDetailPage: FC = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const location: Location = useLocation();

	const [loggedUser, setLoggedUser]: [
		UserAuth,
		React.Dispatch<React.SetStateAction<UserAuth>>
	] = useState({
		name: "",
		role: "",
		token: "",
	});
	const [isFileModalOpened, setIsFileModalOpened] = useState(false);
	const [isSectionModalOpened, setIsSectionModalOpened] = useState(false);
	const [sections, setSections] = useState<Section[]>([]);

	useEffect(() => {
		setLoggedUser(location.state as UserAuth);
		getSections();
	}, []);

	const openFileModal = () => {
		setIsFileModalOpened(true);
	};

	const closeFileModal = () => {
		setIsFileModalOpened(false);
	};

	const openSectionModal = () => {
		setIsSectionModalOpened(true);
	};

	const closeSectionModal = () => {
		setIsSectionModalOpened(false);
	};

	const goToAddQuiz = (sectionId: number) => {
		navigate(`/quizzMaker`, { state: { loggedUser, sectionId } });
	};

	const goToViewQuiz = (quizId: number) => {
		navigate(`/quizzFinishedPage`, { state: { loggedUser, quizId } });
	};

	const goToTakeQuiz = (sectionId: number, courseId: number) => {
		navigate(`/quizzStartPage`, {
			state: {
				credentials: location.state,
				sectionId: sectionId,
				courseId: courseId,
			},
		});
	};

	const goToQuizResults = (quizId: number) => {
		// TODO pagina profesori
	};

	const getSections = async () => {
		const sections = await CourseRepository.getSections(
			+id!,
			(location.state as UserAuth).token
		);

		let sectionsClickable: Section[] = [];

		if ((location.state as UserAuth).role === Roles.TEACHER) {
			sectionsClickable = sections.map((section) => {
				section.buttonText = section.quiz
					? "Check quiz results !"
					: "Add a quiz !";
				section.buttonIcon = section.quiz ? faArrowRight : faPlus;
				section.onButtonClick = section.quiz
					? () => {
							goToQuizResults(section.quiz!.id);
					  }
					: () => {
							goToAddQuiz(section.id!);
					  };
				section.completed = section.quiz ? false : true;
				section.onImageClick = openFileModal;
				return section;
			});
		} else {
			sectionsClickable = sections.map((section) => {
				section.buttonText = section.quiz ? "Take the quiz !" : "";
				section.buttonIcon = section.quiz ? faArrowRight : faPlus;
				section.onButtonClick = section.quiz
					? () => {
							goToTakeQuiz(section.id!, +id!);
					  }
					: () => {};
				section.completed = section.quiz ? false : true;
				section.onImageClick = openFileModal;
				return section;
			});
		}

		setSections(sectionsClickable);
	};

	const files = [
		{ title: "File1", type: "" },
		{ title: "File2", type: "" },
		{ title: "File3", type: "" },
		{ title: "File4", type: "" },
		{ title: "File5", type: "" },
	];

	const onLogout = () => {
		sessionStorage.removeItem("isAuth");
		navigate(`/loginPage`, {});
		// TODO: delete navigation history
	};

	// WILL BE REPLACED WITH OUTLET
	const studentLinks: CustomNavLink[] = [
		{ text: "Show notes", href: "#" },
		{ text: "Quiz results", href: "#" },
		{ text: "Log out", href: "/", onClick: onLogout },
	];

	const teacherLinks: CustomNavLink[] = [
		{ text: "Listing courses", href: "#" },
		{ text: "Quiz results", href: "#" },
		{ text: "Log out", href: "/", onClick: onLogout },
	];

	const teacherFilesValidator = (file: File) => {
		return filesTypeValidator(file, ACCEPTED_FILE_TYPES.TEACHER);
	};

	const onAddSection = async (title: string, description: string) => {
		const addedCourse: SectionAddDTO = await CourseService.addSection(
			+id!,
			{
				title: title,
			},
			loggedUser.token
		);

		getSections();
		// TODO: Exceptions + Validations
		console.log(title, description);
	};

	const buttonNavi = (e: any): void => {
		navigate(`/teacherQuizz`, { state: location.state });
	};

	return (
		<React.Fragment>
			<NavBar
				links={loggedUser.role === Roles.TEACHER ? teacherLinks : studentLinks}
			></NavBar>
			<div className={styles["container"]}>
				{loggedUser.role === Roles.TEACHER ? (
					<ClassicButton
						className={`${styles["btn-add"]}`}
						onClick={openSectionModal}
					>
						<FontAwesomeIcon
							className={styles["btn__icon"]}
							icon={faBookOpenReader}
						/>
						<span className={styles["btn__text"]}>ADD SECTION</span>
					</ClassicButton>
				) : null}
				<SectionsList
					sections={
						loggedUser.role === Roles.TEACHER
							? sections
							: sections.map((section) => {
									if (!section.quiz) {
										section.buttonText = "";
									}
									return section;
							  })
					}
				></SectionsList>
			</div>
			{isFileModalOpened && (
				<ModalContainer onClose={closeFileModal}>
					<DragFiles
						className={`${styles["container"]} ${styles["drag-container"]}`}
						data={files}
						validator={teacherFilesValidator}
					></DragFiles>
				</ModalContainer>
			)}
			{isSectionModalOpened && (
				<AddCourseModal
					title="ADD SECTION"
					onClose={closeSectionModal}
					className={styles["modal"]}
					onSave={onAddSection}
				></AddCourseModal>
			)}
			<button onClick={buttonNavi}>mamamam</button>
		</React.Fragment>
	);
};

export default CourseDetailPage;

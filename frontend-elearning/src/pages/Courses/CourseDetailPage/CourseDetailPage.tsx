import React, { FC, useEffect, useRef, useState } from "react";
import DataCard from "../../../components/DataCard/DataCard";
import DragFiles from "../../../components/DragFiles/DragFiles";
import styles from "./CourseDetailPage.module.css";
import "../../global.css";
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
import CircleProgress from "../../../components/CircleProgress/CircleProgress";
import FileData from "../../../models/FileData";
import Data from "../../../models/Data";

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
  const [files, setFiles] = useState<FileData[]>([]);
  const downloadRef = useRef<HTMLDivElement>(null);
  const [focusedSection, setFocusedSection] = useState<number>();

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
    navigate(`/quizzer`, {
      state: { credentials: location.state, sectionId: sectionId },
    });
  };

  const goToReviewQuizStudent = (
    sectionId: number,
    courseId: number,
    quizIsEnded: boolean,
    quizId: number
  ) => {
    navigate(`/quizzFinishedPage`, {
      state: {
        credentials: location.state,
        sectionId: sectionId,
        courseId: courseId,
        quizIsEnded: quizIsEnded,
        quizId: quizId,
      },
    });
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

  const goToViewQuizTeacher = (
    sectionId: number,
    courseId: number,
    sectionName: string
  ) => {
    console.log(location.state);
    navigate(`/teacherQuizz`, {
      state: {
        generalState: { credentials: location.state },
        subjectTitle: "palceholder!!",
        sectionTitle: sectionName,
        courseId: courseId,
        sectionId: sectionId,
      },
    });
  };

  const getFiles = async (courseId: number, sectionId: number) => {
    const files = await CourseRepository.getFilesBySectionId(
      courseId,
      sectionId,
      (location.state as UserAuth).token
    );

    setFiles(files);

    return files;
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
              goToViewQuizTeacher(section.id!, +id!, section.title);
            }
          : () => {
              goToAddQuiz(section.id!);
            };
        section.completed = section.quiz ? false : true;
        section.onImageClick = async () => {
          const files = await getFiles(+id!, section.id!);
          setFocusedSection(section.id);
          openFileModal();
        };
        return section;
      });
    } else {
      sectionsClickable = sections.map((section) => {
        if (section.quiz && !section.quiz.isVisible) {
          section.buttonText = "";
        } else if (section.quiz && section.quiz.isEnded) {
          section.buttonText = "Check quiz results !";
          section.onButtonClick = () => {
            goToReviewQuizStudent(
              section.id!,
              +id!,
              section.quiz?.isEnded!,
              section.quiz!.id
            );
          };
        } else if (section.quiz) {
          section.buttonText = "Take the quiz !";
          section.onButtonClick = () => {
            goToTakeQuiz(section.id!, +id!);
          };
        } else {
          section.buttonText = "";
        }
        section.buttonIcon = section.quiz ? faArrowRight : faPlus;
        section.completed = section.quiz ? false : true;
        section.onImageClick = async () => {
          const files = await getFiles(+id!, section.id!);
          setFocusedSection(section.id);
          if (files.length) {
            openFileModal();
          }
        };
        return section;
      });
    }
    setSections(sectionsClickable);
  };

  const onLogout = () => {
    sessionStorage.removeItem("isAuth");
    navigate(`/loginPage`, {});
    // TODO: delete navigation history
  };

  const goToTeacherReportModule = () => {
    navigate(`/quizChart`, { state: location.state });
  };

  const goToMainPage = () => {
    navigate(`/mainPage`, { state: location.state });
  };

  const goToSharedNotes = () => {
    navigate(`/sharedNotes`, { state: location.state });
  };

  const studentLinks: CustomNavLink[] = [
    { text: "Show notes", href: "/", onClick: goToSharedNotes },
    { text: "Quiz results", href: "#" },
    { text: "Log out", href: "/", onClick: onLogout },
  ];

  const teacherLinks: CustomNavLink[] = [
    { text: "Listing courses", href: "", onClick: goToMainPage },
    { text: "Quiz results", href: "/", onClick: goToTeacherReportModule },
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
        description,
      },
      loggedUser.token
    );

    getSections();
    // TODO: Exceptions + Validations
  };

  const sendFile = async (files: FileList) => {
    const formData = new FormData();

    for (let file of files) {
      formData.append("files", file);
    }

    try {
      const fileResponse = await fetch(
        `http://localhost:8080/courses/${id}/sections/${focusedSection}/upload`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${loggedUser.token}`,
          },
          body: formData,
        }
      );

      console.log("file added " + files[0].name);
    } catch (e) {
      console.log(e);
    }
  };

  const downloadFile = async (e: any, dataInfo: Data) => {
    e.preventDefault();

    try {
      const fileResponse = await fetch(
        `http://localhost:8080/courses/${id}/sections/${focusedSection}/files/${dataInfo.title}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${loggedUser.token}`,
          },
        }
      );

      const fileData = await fileResponse.blob();
      const url = window.URL.createObjectURL(fileData);
      const downloadAnchor = document.createElement("a");
      downloadAnchor.style.display = "none";
      downloadAnchor.href = url;
      downloadAnchor.download = dataInfo.title;
      downloadRef.current?.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadRef.current?.removeChild(downloadAnchor);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <NavBar
        links={loggedUser.role === Roles.TEACHER ? teacherLinks : studentLinks}
      ></NavBar>
      {/* <CircleProgress></CircleProgress> */}
      <div className={styles["container"]} ref={downloadRef}>
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
        <SectionsList sections={sections}></SectionsList>
      </div>
      {isFileModalOpened && (
        <ModalContainer onClose={closeFileModal}>
          <DragFiles
            className={`${styles["container"]} ${styles["drag-container"]}`}
            data={files}
            validator={teacherFilesValidator}
            onFilesSent={sendFile}
            onFileClicked={downloadFile}
            enableDrop={loggedUser.role === Roles.TEACHER ? true : false}
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
    </React.Fragment>
  );
};

export default CourseDetailPage;

import { FC, useEffect, useRef, useState } from "react";
import UserAuth from "../../models/UserAuth";
import styles from "./SharedNotesPage.module.css";
import React from "react";
import { useLocation, useNavigate, Location } from "react-router-dom";
import CustomNavLink from "../../models/CustomNavLink";
import NavBar from "../../Navbar/NavBar";
import DragFiles from "../../components/DragFiles/DragFiles";
import filesTypeValidator from "../../Services/Validation/Validator";
import {
  ACCEPTED_FILE_TYPES,
  API_URLS,
  Roles,
} from "../../Constants/Constants";
import Data from "../../models/Data";
import "../global.css";
import FileData from "../../models/FileData";
import CourseRepository from "../../Repositories/Course/CourseRepository";
import FooterMain from "../../FooterMain/FooterMain";

const SharedNotesPage: FC = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [loggedUser, setLoggedUser]: [
    UserAuth,
    React.Dispatch<React.SetStateAction<UserAuth>>
  ] = useState({
    name: "",
    role: "",
    token: "",
  });

  // force update
  const [rerender, setRerender] = useState(false);

  const location: Location = useLocation();
  const navigate = useNavigate();
  const downloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoggedUser(location.state as UserAuth);
    getFiles();
  }, [rerender]);

  const studentFilesValidator = (file: File) => {
    return filesTypeValidator(file, ACCEPTED_FILE_TYPES.STUDENT);
  };

  const getFiles = async () => {
    const newFiles = await CourseRepository.getStudentFiles(
      (location.state as UserAuth).token
    );

    setFiles(newFiles);

    return newFiles;
  };

  const sendFile = async (files: FileList) => {
    const formData = new FormData();

    for (let file of files) {
      formData.append("files", file);
    }

    try {
      const fileResponse = await fetch(`${API_URLS.GET_STUDENT_FILES}`, {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
        body: formData,
      });

      console.log("file added " + files[0].name);

      setRerender(!rerender);
    } catch (e) {
      console.log(e);
    }
  };

  const downloadFile = async (e: any, dataInfo: Data) => {
    e.preventDefault();

    try {
      const fileResponse = await fetch(
        `${API_URLS.GET_STUDENT_FILES}/${dataInfo.title}`,
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

  const onLogout = () => {
    sessionStorage.removeItem("isAuth");
    navigate(`/loginPage`, {});
    // TODO: delete navigation history
  };

  const goToSharedNotes = () => {
    navigate(`/sharedNotes`, { state: location.state });
  };

  const goToMainPage = () => {
    navigate(`/mainPage`, { state: location.state });
  };

  const studentLinks: CustomNavLink[] = [
    { text: "List courses", href: "/", onClick: goToMainPage },
    { text: "Show notes", href: "/", onClick: goToSharedNotes },
    { text: "Quiz results", href: "#" },
    { text: "Log out", href: "/", onClick: onLogout },
  ];

  return (
    <React.Fragment>
      <NavBar links={studentLinks}></NavBar>
      <div ref={downloadRef} className={styles["container"]}>
        <div className={styles["image-container"]}>
          <p className={styles["header--primary"]}>
            Alone we can do so little,{" "}
            <span className={styles["highlighted"]}>
              <div className={styles["brush-stroke"]}></div>together
            </span>{" "}
            we can do so much.
          </p>
          <img
            className={styles["image"]}
            src={`${process.env.PUBLIC_URL}/assets/data-images/shaking-hands.png`}
          />
        </div>
        <DragFiles
          className={`${styles["drag-container"]}`}
          data={files}
          validator={studentFilesValidator}
          onFilesSent={sendFile}
          onFileClicked={downloadFile}
          enableDrop={loggedUser.role === Roles.STUDENT ? true : false}
        ></DragFiles>
      </div>
      <FooterMain className={styles["footer"]} />
    </React.Fragment>
  );
};

export default SharedNotesPage;

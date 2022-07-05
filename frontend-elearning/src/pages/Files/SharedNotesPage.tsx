import { FC, useEffect, useRef, useState } from "react";
import UserAuth from "../../models/UserAuth";
import styles from "./SharedNotesPage.module.css";
import React from "react";
import { useLocation, useNavigate, Location } from "react-router-dom";
import CustomNavLink from "../../models/CustomNavLink";
import NavBar from "../../Navbar/NavBar";
import DragFiles from "../../components/DragFiles/DragFiles";
import filesTypeValidator from "../../Services/Validation/Validator";
import { ACCEPTED_FILE_TYPES, Roles } from "../../Constants/Constants";
import Data from "../../models/Data";

const SharedNotesPage: FC = () => {
  const [loggedUser, setLoggedUser]: [
    UserAuth,
    React.Dispatch<React.SetStateAction<UserAuth>>
  ] = useState({
    name: "",
    role: "",
    token: "",
  });

  const location: Location = useLocation();
  const navigate = useNavigate();
  const downloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoggedUser(location.state as UserAuth);
  }, []);

  const studentFilesValidator = (file: File) => {
    return filesTypeValidator(file, ACCEPTED_FILE_TYPES.STUDENT);
  };

  const sendFile = async (files: FileList) => {
    const formData = new FormData();

    for (let file of files) {
      formData.append("files", file);
    }

    try {
      const fileResponse = await fetch(`http://localhost:8080/courses/`, {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
        body: formData,
      });

      console.log("file added " + files[0].name);
    } catch (e) {
      console.log(e);
    }
  };

  const downloadFile = async (e: any, dataInfo: Data) => {
    e.preventDefault();

    try {
      const fileResponse = await fetch(`http://localhost:8080/courses/`, {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });

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

  const studentLinks: CustomNavLink[] = [
    { text: "Show notes", href: "/", onClick: goToSharedNotes },
    { text: "Quiz results", href: "#" },
    { text: "Log out", href: "/", onClick: onLogout },
  ];

  const files = [{ name: "File1", type: "File2", date: "qdd" }];

  return (
    <React.Fragment>
      <NavBar links={studentLinks}></NavBar>
      <div ref={downloadRef}>
        <DragFiles
          className={`${styles["container"]} ${styles["drag-container"]}`}
          data={files}
          validator={studentFilesValidator}
          onFilesSent={sendFile}
          onFileClicked={downloadFile}
          enableDrop={loggedUser.role === Roles.STUDENT ? true : false}
        ></DragFiles>
      </div>
    </React.Fragment>
  );
};

export default SharedNotesPage;

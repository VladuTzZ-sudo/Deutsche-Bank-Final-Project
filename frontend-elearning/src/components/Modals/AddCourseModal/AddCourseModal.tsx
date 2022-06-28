import React, { ChangeEvent, FC, useRef, useState } from "react";
import ClassicButton from "../../Buttons/ClassicButton/ClassicButton";
import ReactDOM from "react-dom";
import UnderlinedInput from "../../Inputs/UnderlinedInput";
import styles from "./AddCourseModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import ModalContainer from "../ModalContainer/ModalContainer";

interface ModalProps {
  className?: string;
  onClose?: React.MouseEventHandler;
  onSave?: (title: string, description: string) => void;
}

const AddCourseModal: FC<ModalProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onSaveHandler = (e: React.MouseEvent): void => {
    if (props.onSave) {
      props.onSave(title, description);
      props.onClose?.(e);
    }
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <ModalContainer onClose={props.onClose}>
      <div className={`${styles["modal__content"]} ${props.className}`}>
        <div className={styles["title"]}>
          <span>ADD COURSE</span>{" "}
          <FontAwesomeIcon
            className={styles["btn-close"]}
            icon={faClose}
            onClick={props.onClose}
          />
        </div>
        <div className={styles["form-container"]}>
          <UnderlinedInput
            className={styles["input"]}
            placeholder="Course Title"
            onChange={onTitleChange}
          ></UnderlinedInput>
          <UnderlinedInput
            className={styles["input"]}
            placeholder="Course Description"
            onChange={onDescriptionChange}
          ></UnderlinedInput>
          <ClassicButton onClick={onSaveHandler} className={styles["btn-save"]}>
            Send
          </ClassicButton>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AddCourseModal;

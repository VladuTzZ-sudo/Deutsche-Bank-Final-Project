import { FC } from "react";
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
}

const AddCourseModal: FC<ModalProps> = (props) => {
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
          ></UnderlinedInput>
          <UnderlinedInput
            className={styles["input"]}
            placeholder="Course Description"
          ></UnderlinedInput>
          <ClassicButton onClick={() => {}} className={styles["btn-save"]}>
            Send
          </ClassicButton>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AddCourseModal;

import { FC } from "react";
import ClassicButton from "../../Buttons/ClassicButton/ClassicButton";
import ReactDOM from "react-dom";
import UnderlinedInput from "../../Inputs/UnderlinedInput";
import styles from "./AddCourseModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  onClose?: React.MouseEventHandler<SVGSVGElement>;
}

const AddCourseModal: FC<ModalProps> = (props) => {
  return ReactDOM.createPortal(
    <div className={styles["modal"]}>
      <div className={styles["modal__background"]}></div>
      <div className={styles["modal__content"]}>
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
          <ClassicButton onClick={() => {}}>Send</ClassicButton>
        </div>
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default AddCourseModal;

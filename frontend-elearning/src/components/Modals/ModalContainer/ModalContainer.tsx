import { FC } from "react";
import styles from "./ModalContainer.module.css";
import ReactDOM from "react-dom";

interface ModalProps {
  onClose?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const ModalContainer: FC<ModalProps> = (props) => {
  return ReactDOM.createPortal(
    <div className={styles["modal"]}>
      <div
        className={styles["modal__background"]}
        onClick={props.onClose}
      ></div>
      {props.children}
    </div>,
    document.getElementById("modal")!
  );
};

export default ModalContainer;

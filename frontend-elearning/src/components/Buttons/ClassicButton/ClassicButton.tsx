import { FC } from "react";
import styles from "./ClassicButton.module.css";

interface ButtonProps {
  onClick?: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
}

const ClassicButton: FC<ButtonProps> = (props) => {
  return (
    <button
      className={`${props.className} ${styles["btn"]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ClassicButton;

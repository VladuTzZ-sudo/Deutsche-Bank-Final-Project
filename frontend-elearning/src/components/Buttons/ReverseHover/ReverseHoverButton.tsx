import { FC } from "react";
import styles from "./ReverseHoverButton.module.css";

interface ButtonProps {
  onClick?: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
}

const ReverseHoverButton: FC<ButtonProps> = (props) => {
  return (
    <button
      className={`${styles["btn"]} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ReverseHoverButton;

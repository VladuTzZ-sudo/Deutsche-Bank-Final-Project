import { FC } from "react";
import styles from "./UnderlinedInput.module.css";

interface InputProps {
  className?: string;
  placeholder?: string;
}

const UnderlinedInput: FC<InputProps> = (props) => {
  return (
    <input
      className={`${styles["input"]} ${props.className}`}
      placeholder={props.placeholder}
    ></input>
  );
};

export default UnderlinedInput;

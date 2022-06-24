import { FC } from "react";
import styles from "./UnderlinedInput.module.css";

interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string | number | string[];
  onChange?: React.ChangeEventHandler;
}

const UnderlinedInput: FC<InputProps> = (props) => {
  return (
    <input
      className={`${styles["input"]} ${props.className}`}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
};

export default UnderlinedInput;

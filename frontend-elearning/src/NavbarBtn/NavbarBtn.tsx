import React from "react";
import styles from "./NavbarBtn.module.css";

export default function NavbarBtn(props: any) {
  const onClickHandler = (e: React.MouseEvent) => {
    if (props.onClick) {
      e.preventDefault();
      props.onClick?.();
    }
  };

  return (
    <a
      href={props.href}
      className={styles["navbar-btn"]}
      onClick={onClickHandler}
    >
      {props.text}
    </a>
  );
}

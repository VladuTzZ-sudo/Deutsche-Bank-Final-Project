import React from "react";
import styles from "./FooterMain.module.css";

export default function FooterMain(props: any) {
  return (
    <footer className={`${styles["footer-text"]} ${props.className}`}>
      &copy; {new Date().getFullYear()} Copyright: Goal Diggers Team
    </footer>
  );
}

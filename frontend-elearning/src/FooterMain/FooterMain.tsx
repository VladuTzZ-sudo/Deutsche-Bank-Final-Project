import React from "react";
import styles from "./FooterMain.module.css";

export default function FooterMain() {
	return (
		<footer className={styles["footer-text"]}>
			&copy; {new Date().getFullYear()} Copyright: Goal Diggers Team
		</footer>
	);
}

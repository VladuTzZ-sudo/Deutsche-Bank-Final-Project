import React from "react";
import styles from "./NavbarBtn.module.css";

export default function NavbarBtn(props: any) {
	return (
		<a href={props.href} className={styles["navbar-btn"]}>
			{props.text}
		</a>
	);
}

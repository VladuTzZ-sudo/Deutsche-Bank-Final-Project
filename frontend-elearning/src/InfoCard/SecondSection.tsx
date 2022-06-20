import React from "react";
import styles from "./SecondSection.module.css";

export default function SecondSection() {
	return (
		<div className={styles["second-section"]}>
			<div className={styles["container-center"]}>
				<h1 className={styles["info-title-second-section"]}>Modules</h1>
			</div>
			<div className={styles["row-container"]}>
				<div className={`col ${styles["col-text-align"]}`}>
					<h2 className={styles["col-title"]}>Teacher:</h2>
					<h4>Upload courses</h4>
					<h4>Add new quiz</h4>
					<h4>Report module</h4>
					<h4>Notification module</h4>
				</div>
				<div className={`col $(styles["col-text-align"])`}>
					<h2 className={styles["col-title"]}>Student:</h2>
					<h4>Take a quiz</h4>
					<h4>Personal page</h4>
					<h4>Report module</h4>
					<h4>Upload notes</h4>
				</div>
			</div>
		</div>
	);
}

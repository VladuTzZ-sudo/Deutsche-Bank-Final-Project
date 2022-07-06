import Button from "../Button/Button";
import styles from "./RegisterPage.module.css";
import { ChangeEvent, useState } from "react";
import axios from "axios";

type UserRegisterCred = {
	email: string;
	password: string;
	surname: string;
	name: string;
	role: string;
};

export default function RegisterPage() {
	const [userInput, setInput] = useState({
		email: "",
		password: "",
		surname: "",
		name: "",
		role: "",
	});

	function sendCredentials() {
		axios
			.post("http://localhost:8080/register", userInput)
			.then((response) => {
				flushForm();
				alert(response.data);
			})
			.catch((err) => {
				alert(err.response.data);
			});
	}

	function flushForm() {
		setInput({
			email: "",
			password: "",
			surname: "",
			name: "",
			role: "",
		});

		(document.getElementById("email") as HTMLInputElement).value = "";
		(document.getElementById("password") as HTMLInputElement).value = "";
		(document.getElementById("surname") as HTMLInputElement).value = "";
		(document.getElementById("name") as HTMLInputElement).value = "";
		(document.getElementById("role") as HTMLInputElement).value = "NONE";
	}
	const handleChange = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		setInput((prevState: UserRegisterCred) => ({
			...prevState,
			[(event.target as HTMLInputElement).id]: (
				event.target as HTMLInputElement
			).value,
		}));
	};

	function isEmailValid(email: string) {
		const regex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		if (!String(email).toLowerCase().match(regex)) {
			alert("Format of your email is not valid!");
			return false;
		} else if (email.length < 6 || email.length > 40) {
			alert("Your email must have between 6 and 40 characters!");
			return false;
		}
		return true;
	}

	function isPasswordValid(password: string) {
		if (password.length < 5 || password.length > 20) {
			alert("Your password must have between 5 and 20 characters!");
			return false;
		}
		return true;
	}
	function issurnameValid(surname: string) {
		if (surname.length < 3 || surname.length > 20) {
			alert("Your first name must have between 3 and 20 characters!");
			return false;
		}
		return true;
	}

	function isnameValid(name: string) {
		if (name.length < 3 || name.length > 20) {
			alert("Your last name must have between 3 and 20 characters!");
			return false;
		}
		return true;
	}

	function isRoleValid(role: string) {
		if (role === "" || role === "NONE") {
			alert("Role filed is empty!");
			return false;
		}
		return true;
	}

	function isUserInpuValid() {
		let ok: boolean;
		ok = false;

		ok = isEmailValid(userInput.email);
		if (ok === true) {
			ok = isPasswordValid(userInput.password);
		}
		if (ok === true) {
			ok = issurnameValid(userInput.surname);
		}
		if (ok === true) {
			ok = isnameValid(userInput.name);
		}
		if (ok === true) {
			ok = isRoleValid(userInput.role);
		}

		return ok;
	}
	const handleSubmit = () => {
		console.log(userInput);
		if (isUserInpuValid()) {
			sendCredentials();
		}
	};

	return (
		<div className={styles["register-page"]}>
			<div className={styles["register-page__form"]}>
				<h1 className={styles["register-page__title"]}>
					Register your account!
				</h1>
				<label className={styles["register-page__form__label"]}>Email</label>
				<input
					onChange={handleChange}
					className={styles["register-page__form__input-text"]}
					type="text"
					id="email"
					placeholder="Your email is...."
				/>
				<label className={styles["register-page__form__label"]}>Password</label>
				<input
					onChange={handleChange}
					className={styles["register-page__form__input-text"]}
					type="password"
					id="password"
					placeholder="Your password is...."
				/>
				<label className={styles["register-page__form__label"]}>Surname</label>
				<input
					onChange={handleChange}
					className={styles["register-page__form__input-text"]}
					type="text"
					id="surname"
					placeholder="Your surname is...."
				/>
				<label className={styles["register-page__form__label"]}>Name</label>
				<input
					onChange={handleChange}
					className={styles["register-page__form__input-text"]}
					type="text"
					id="name"
					placeholder="Your name is...."
				/>
				<label className={styles["register-page__form__label"]}>Role</label>
				<select
					onChange={handleChange}
					id="role"
					className={styles["register-page__form__select"]}
				>
					<option value="NONE">Please select role</option>
					<option value="teacher">Teacher</option>
					<option value="student">Student</option>
				</select>
				<div className={styles["button-margins"]}>
					<Button
						text="Register!"
						func={() => {
							handleSubmit();
						}}
					/>
				</div>
			</div>
		</div>
	);
}

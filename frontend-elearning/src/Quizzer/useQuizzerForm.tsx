import QuizzerFormValues from "./QuizzerFormValues";
import { useForm } from "react-hook-form";
import axios from "axios";

function useFriendsForm(state: any) {
	const methods = useForm<QuizzerFormValues>({
		defaultValues: {
			quizzTitle: "",
			duration: "",
			due: undefined,
			details: "",
			questions: [
				{ questionText: "", answers: [{ answerText: "", answerValue: "" }] },
			],
		},
	});

	const handleSubmit = (values: QuizzerFormValues) => {
		console.log(values);

		let token = (state as any).credentials.token;
		console.log(token);
		axios
			.post(
				"http://localhost:8080/sections/" + state.sectionId + "/quiz",
				values,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((response) => {
				alert("Quizz succesfully registered!");
			})
			.catch((err) => {
				alert(err.response.data);
			});
	};

	return {
		methods,
		handleSubmit: methods.handleSubmit(handleSubmit),
	};
}

export default useFriendsForm;

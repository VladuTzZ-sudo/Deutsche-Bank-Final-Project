import QuizzerFormValues from "./QuizzerFormValues";
import { useForm } from "react-hook-form";

function useFriendsForm() {
  const methods = useForm<QuizzerFormValues>({
    defaultValues: {
      quizzTitle: "",
      duration: "",
      due: "",
      details: "",
      questions: [
        { questionText: "", answers: [{ answerText: "", answerValue: "" }] },
      ],
    },
  });

  const handleSubmit = (values: QuizzerFormValues) => {
    console.log(values);
  };

  return {
    methods,
    handleSubmit: methods.handleSubmit(handleSubmit),
  };
}

export default useFriendsForm;

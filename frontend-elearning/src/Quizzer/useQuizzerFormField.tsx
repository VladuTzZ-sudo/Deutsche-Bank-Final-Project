import { useFieldArray, useFormContext } from "react-hook-form";
import QuizzerFormValues from "./QuizzerFormValues";

function useFriendsFormField() {
  const { control, register } = useFormContext<QuizzerFormValues>();

  const { fields, append, remove } = useFieldArray<QuizzerFormValues>({
    control,
    name: "questions",
  });

  const addNewQuestion = () => {
    append({
      questionText: "",
      answers: [{ answerText: "", answerValue: "" }],
    });
  };

  const removeQuestion = (questionIndex: number) => () => {
    remove(questionIndex);
  };

  return {
    fields,
    register,
    addNewQuestion,
    removeQuestion,
  };
}

export default useFriendsFormField;

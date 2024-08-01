import { useState } from "react";
import * as styles from "./Trainer.styles";

export default function Trainer(set, moveVocableUp) {
  if (!set) return <div>Loading...</div>;
  const [question, setQuestion] = useState(true);
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);

  function isAnswerCorrect(input) {
    const answer = input;
    if (answer === set.vocables[index].vocable) {
      return true;
    }
    const answerWithoutSpace = answer.split(" ").join("");
    if (answerWithoutSpace === set.vocables[index].vocable) {
      return true;
    }
    return false;
  }

  function handleSubmit(event) {
    setQuestion(false);
    const correctAnswer = isAnswerCorrect(event.target.answer);
    if (correctAnswer) {
      setMessage("Correct!");
    } else {
      setMessage("False :(");
      moveVocableUp(currentVocable);
    }
  }

  function goToNextVocable() {
    setQuestion(true);
    const oldIndex = [...index];
    setIndex(oldIndex + 1);
  }

  return (
    <styles.TrainerWrapper>
      {message.length !== 0 && <styles.TrainerMessage></styles.TrainerMessage>}
      {question ? (
        <styles.VocableCard>
          {set.vocables[index].translation}
        </styles.VocableCard>
      ) : (
        <styles.VocableCard>{set.vocables[index].vocable}</styles.VocableCard>
      )}
      <styles.TrainerForm>
        <AnswerField name="answer" />
        <styles.CheckButton onSubmit={handleSubmit}>
          Check my answer
        </styles.CheckButton>
      </styles.TrainerForm>
    </styles.TrainerWrapper>
  );
}

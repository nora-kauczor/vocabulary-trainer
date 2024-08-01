import { useState } from "react";
import * as styles from "./Trainer.styles";

export default function Trainer(set, moveVocableUp) {
  const [question, setQuestion] = useState(true);
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);

  if (!set) return <div>Loading...</div>;

  function isAnswerCorrect(input) {
    const answer = input;
    if (answer === set.vocables[index].vocable) {
      return true;
    }
    // TODO so dass nur die leerzeichen vorne und hinten weggenommen werden
    // const answerWithoutSpace = answer.split(" ").join("");
    // if (answerWithoutSpace === set.vocables[index].vocable) {
    //   return true;
    // }
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
  // random Reihenfolge der Sets of the Day
  // function goToNextVocable() {
  //   setQuestion(true);
  //   const oldIndex = [...index];
  //   setIndex(oldIndex + 1);
  // }

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
        <styles.AnswerField name="answer" />
        <styles.CheckButton onSubmit={handleSubmit}>
          Check my answer
        </styles.CheckButton>
      </styles.TrainerForm>
    </styles.TrainerWrapper>
  );
}

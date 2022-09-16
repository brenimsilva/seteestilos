import React, { useContext, useState, useEffect } from "react";
import questions from "./DATA/questions.json";
import Question from "./Question";
import ChoicesList from "./ChoicesList";
import Choice from "./Choice";
import { QuestionsContext } from "./store/questions-context";
export default function QuestionContainer() {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    setVotes(["Esportivo", "DRAMATICO", "sexy"]);
  }, []);

  const { addVotesToList } = useContext(QuestionsContext);
  function onConfirmVotes() {
    addVotesToList(votes);
  }
  return (
    <div>
      {questions.map((question, index) => {
        return (
          <div key={index}>
            <Question index={index} text={question.question} key={index} />
            <ChoicesList
              choices={question.answers}
              maxChoices={questions[index].choices}
            />
            <button onClick={onConfirmVotes}>Confirmar</button>
          </div>
        );
      })}
    </div>
  );
}

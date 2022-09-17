import React, { useContext, useState, useEffect } from "react";
import questions from "./DATA/questions.json";
import Question from "./Question";
import ChoicesList from "./ChoicesList";
import Choice from "./Choice";
import { QuestionsContext } from "./store/questions-context";
function QuestionContainer() {
  const [votes, setVotes] = useState([]);
  const [count, setCounter] = useState(0);

  const { addVotesToList } = useContext(QuestionsContext);

  function onConfirmVotes() {
    addVotesToList();
  }

  function onGetVotes(vote) {
    if (!votes.includes(vote)) {
      setVotes((prev) => {
        return [...prev, vote];
      });
    }
  }

  function onRemoveVotes(vote) {
    var index = votes.indexOf(vote);
    setVotes((prev) => {
      return prev.splice(index, 1);
    });
  }

  return (
    <div>
      {questions.map((question, index) => {
        return (
          <div key={index}>
            <Question index={index} text={question.question} key={index} />
            <ChoicesList
              onGetVotes={onGetVotes}
              onRemoveVotes={onRemoveVotes}
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

export default QuestionContainer;

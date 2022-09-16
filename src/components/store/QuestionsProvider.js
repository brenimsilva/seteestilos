import React, { useContext, useReducer } from "react";
import { QuestionsContext } from "./questions-context";
import questionsData from "../DATA/questions.json";

//Context criado para funcoes da questao em si
//Para guardar dados do usuario procure UserProvider
const defaultState = {
  //question: 1,
  //maxVotes: 1,
  votes: [
    { type: "Esportivo", count: 0 },
    { type: "Elegante", count: 0 },
    { type: "Dramatico", count: 0 },
    { type: "Sexy", count: 0 },
    { type: "Romantico", count: 0 },
    { type: "Criativo", count: 0 },
    { type: "Tradicional", count: 0 },
  ],
};
function choiceReducer(state, action) {
  let lowerActionArray = [];
  action.votes.forEach((element) => {
    lowerActionArray.push(element.toLowerCase());
  });
  switch (action.type) {
    case "ADD":
      state.votes.forEach((element) => {
        if (lowerActionArray.includes(element.type.toLowerCase())) {
          element.count++;
        }
      });
      console.log(state);
      return {};
    case "REMOVE":
      return {};
  }
}

export default function QuestionsProvider(props) {
  const [choiceState, dispatchChoices] = useReducer(
    choiceReducer,
    defaultState
  );

  function addVotesToList(votes) {
    dispatchChoices({ type: "ADD", votes: votes });
  }

  const questionsContext = {
    votes: choiceState.votes,
    addVotesToList,
  };
  return (
    <QuestionsContext.Provider value={questionsContext}>
      {props.children}
    </QuestionsContext.Provider>
  );
}

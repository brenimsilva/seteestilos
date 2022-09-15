import React, { useContext, useReducer } from "react";
import QuestionsContext from "./questions-context";
import questionsData from "../DATA/questions.json";

//Context criado para funcoes da questao em si
//Para guardar dados do usuario procure UserProvider
const defaultState = {
  question: 1,
  maxVotes: 1,
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
  switch (action.type) {
    case "ADD":
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

questionsData. 


  <QuestionsContext.Provider></QuestionsContext.Provider>;
}

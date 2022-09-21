import React, { useContext, useReducer } from "react";
import { QuestionsContext } from "./questions-context";
import questionsData from "../DATA/questions.json";

//Context criado para funcoes da questao em si
//Para guardar dados do usuario procure UserProvider
const defaultState = {
  //question: 1,
  //maxVotes: 1,
  tempVotes: [],
  votes: [
    { type: "ESPORTIVO", count: 0 },
    { type: "ELEGANTE", count: 0 },
    { type: "DRAMATICO", count: 0 },
    { type: "SEXY", count: 0 },
    { type: "ROMANTICO", count: 0 },
    { type: "CRIATIVO", count: 0 },
    { type: "TRADICIONAL", count: 0 },
  ],
};
function choiceReducer(state, action) {
  switch (action.type) {
    case "CONFIRM":
      //CONFIRM SETUP
      //EXECUTION
      const totalCount = state.votes.reduce((acumulador, curr, index, arr) => {
        const atual = arr[index].count + 1;
        state.tempVotes.forEach((element) => {
          if (element.type === curr.type) {
            acumulador[index] = {
              type: acumulador[index].type,
              count: atual,
            };
          }
        });
        return acumulador;
      }, state.votes);
      //FINALLY
      console.log(totalCount);
      return { ...state, tempVotes: [], votes: [...totalCount] };

    case "ADD":
      //ADD SETUP
      const tempVotes = state.tempVotes;

      //EXECUTION
      if (!tempVotes.includes(action.vote)) {
        const newTempVotes = [...tempVotes, { type: action.vote, count: 0 }];
        console.log(newTempVotes);
        return { ...state, tempVotes: newTempVotes };
      }
      return { ...state };

    //FINALLY

    case "REMOVE":
      //REMOVE SETUP
      const oldTempVotes = state.tempVotes;

      //EXECUTION
      const newList = oldTempVotes.filter((value) => {
        return value.type !== action.vote;
      });
      console.log(newList);

      //FINALLY
      return { ...state, tempVotes: newList };
  }
}

export default function QuestionsProvider(props) {
  const [choiceState, dispatchChoices] = useReducer(
    choiceReducer,
    defaultState
  );

  function addVotesToList() {
    dispatchChoices({ type: "CONFIRM" });
  }

  function addTempVotes(vote) {
    dispatchChoices({ type: "ADD", vote: vote });
  }

  function removeTempVotes(vote) {
    dispatchChoices({ type: "REMOVE", vote: vote });
  }
  const questionsContext = {
    votes: choiceState.votes,
    addVotesToList,
    addTempVotes,
    removeTempVotes,
  };
  return (
    <QuestionsContext.Provider value={questionsContext}>
      {props.children}
    </QuestionsContext.Provider>
  );
}

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
  //Setup
  let newTempVotes = [];

  switch (action.type) {
    case "CONFIRM":
      //CONFIRM SETUP
      let lowerActionArray = [];
      state.tempVotes.forEach((element) => {
        lowerActionArray.push(element.toLowerCase());
      });
      const newState = { ...state };

      //EXECUTION
      newState.votes.forEach((element) => {
        if (lowerActionArray.includes(element.type.toLowerCase())) {
          element.count++;
          console.log(`${element.type}: ${element.count}`);
        }
      });

      //FINALLY
      console.log(newState);
      state.tempVotes = [];
      newTempVotes = [];
      return { ...newState };

    case "ADD":
      //ADD SETUP
      newTempVotes = state.tempVotes;

      //EXECUTION
      if (!newTempVotes.includes(action.vote)) {
        newTempVotes.push(action.vote);
      }
      console.log(newTempVotes);

      //FINALLY
      return { ...state, tempVotes: newTempVotes };

    case "REMOVE":
      //REMOVE SETUP
      newTempVotes = state.tempVotes;
      const index = newTempVotes.indexOf(action.vote);

      //EXECUTION
      newTempVotes.splice(index, 1);
      console.log(newTempVotes);

      //FINALLY
      return { ...state, tempVotes: newTempVotes };
  }
}

export default function QuestionsProvider(props) {
  const [choiceState, dispatchChoices] = useReducer(
    choiceReducer,
    defaultState
  );

  function addVotesToList(votes) {
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

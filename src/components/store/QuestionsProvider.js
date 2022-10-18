import React, { useReducer } from "react";
import { QuestionsContext } from "./questions-context";

//Context criado para funcoes da questao em si
//Para guardar dados do usuario procure UserProvider
function calcSummary(votesList) {
  const initialState = [
    { type: "ESPORTIVO", count: 0 },
    { type: "ELEGANTE", count: 0 },
    { type: "DRAMATICO", count: 0 },
    { type: "SEXY", count: 0 },
    { type: "ROMANTICO", count: 0 },
    { type: "CRIATIVO", count: 0 },
    { type: "TRADICIONAL", count: 0 },
    { type: "T", count: 0 },
    { type: "PERA", count: 0 },
    { type: "AMPULHETA", count: 0 },
  ];
  //EXECUTION
  const totalCount = votesList.reduce((summary, vote) => {
    const newSummary = summary.map((summaryItem) => {
      if (summaryItem.type === vote) {
        return { ...summaryItem, count: summaryItem.count + 1 };
      }
      return { ...summaryItem };
    });
    return newSummary;
  }, initialState);
  return totalCount;
}

const defaultState = {
  page: 0,
  votesHistory: {},
  tempVotes: [],

  votes: [
    { type: "ESPORTIVO", count: 0 },
    { type: "ELEGANTE", count: 0 },
    { type: "DRAMATICO", count: 0 },
    { type: "SEXY", count: 0 },
    { type: "ROMANTICO", count: 0 },
    { type: "CRIATIVO", count: 0 },
    { type: "TRADICIONAL", count: 0 },

    { type: "T", count: 0 },
    { type: "PERA", count: 0 },
    { type: "AMPULHETA", count: 0 },
  ],
};
function choiceReducer(state, action) {
  switch (action.type) {
    case "CONFIRM":
      //CONFIRM SETUP
      const newVotesHistory = { ...state.votesHistory };
      newVotesHistory[state.page] = state.tempVotes;
      const votesList = Object.values(newVotesHistory).flat();
      const totalCount = calcSummary(votesList);
      //FINALLY
      return {
        ...state,
        tempVotes: [],
        votes: totalCount,
        page: state.page + 1,
        votesHistory: newVotesHistory,
      };

    case "BACK":
      const previousPage = state.page - 1;
      // calcSummary();
      return {
        ...state,
        page: state.page - 1,
        tempVotes: state.votesHistory[previousPage],
      };

    case "TOGGLE":
      //TOGGLE SETUP
      const tempVotes = state.tempVotes;
      const voteSelected = action.data.vote;

      //EXECUTION
      if (
        !tempVotes.includes(voteSelected) &&
        tempVotes.length < action.data.maxChoices
      ) {
        const newTempVotes = [...tempVotes, voteSelected];
        return { ...state, tempVotes: newTempVotes };
      }
      const oldTempVotes = tempVotes.filter((value) => {
        return value !== voteSelected;
      });
      return { ...state, tempVotes: oldTempVotes };
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

  function toggleTempVotes(vote) {
    dispatchChoices({ type: "TOGGLE", data: vote });
  }

  function returnToPreviousPage() {
    dispatchChoices({ type: "BACK" });
  }

  const questionsContext = {
    votes: choiceState.votes,
    page: choiceState.page,
    tempVotes: choiceState.tempVotes,
    addVotesToList,
    toggleTempVotes,
    returnToPreviousPage,
  };
  return (
    <QuestionsContext.Provider value={questionsContext}>
      {props.children}
    </QuestionsContext.Provider>
  );
}

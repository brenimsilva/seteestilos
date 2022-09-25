import React, { useContext, useState, useEffect } from "react";
import questions from "./DATA/questions.json";
import Question from "./Question";
import ChoicesList from "./ChoicesList";
import Choice from "./Choice";
import { QuestionsContext } from "./store/questions-context";
import StatsPage from "./landing/StatsPage";
function QuestionContainer() {
  const [votes, setVotes] = useState([]);
  const [mostVoted, setMostVoted] = useState();
  const ctx = useContext(QuestionsContext);

  function calcMostVotedStyle() {
    let arrVotes = [];
    ctx.votes.forEach((vote) => {
      arrVotes = [...arrVotes, vote.count];
    });
    const numMaior = Math.max(...arrVotes);
    const maior = arrVotes.indexOf(numMaior);
    console.log(numMaior);
    setMostVoted(ctx.votes[maior]);
    console.log("mais votado: ", mostVoted);
  }

  function onConfirmVotes() {
    ctx.addVotesToList();
    // setVotes([]);
    calcMostVotedStyle();
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

  function returnToPreviousPage() {
    ctx.returnToPreviousPage();
  }

  const questionsArray = questions.map((question, index) => {
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
        <button onClick={returnToPreviousPage}>Retornar</button>
      </div>
    );
  });

  //COMPONENT
  return (
    <div>
      {ctx.page < questionsArray.length ? (
        questionsArray[ctx.page]
      ) : (
        <StatsPage mostVoted={mostVoted.type} styleText={"Texto do estilo"} />
      )}
    </div>
  );
}

export default QuestionContainer;

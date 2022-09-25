import React, { useContext, useState, useEffect } from "react";
import questions from "./DATA/questions.json";
import Question from "./Question";
import ChoicesList from "./ChoicesList";
import Choice from "./Choice";
import { QuestionsContext } from "./store/questions-context";
import StatsPage from "./landing/StatsPage";
import style from "../components/styles/question_container.module.css";
import Header from "./UI/Header";
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
      <div key={index} className={style.container}>
        <Question
          index={index}
          text={question.question}
          key={index}
          maxChoices={questions[index].choices}
        />
        <div>
          <ChoicesList
            onGetVotes={onGetVotes}
            onRemoveVotes={onRemoveVotes}
            choices={question.answers}
            maxChoices={questions[index].choices}
          />
        </div>
        <div className={style.buttons}>
          <button
            onClick={returnToPreviousPage}
            className={`${style.btn_back} ${style.btn}`}
          >
            Retornar
          </button>
          <button
            onClick={onConfirmVotes}
            className={`${style.btn_confirm} ${style.btn}`}
          >
            Confirmar
          </button>
        </div>
      </div>
    );
  });

  //COMPONENT
  return (
    <div>
      <Header />
      <div className={style.body}>
        {ctx.page < questionsArray.length ? (
          questionsArray[ctx.page]
        ) : (
          <StatsPage mostVoted={mostVoted.type} styleText={"Texto do estilo"} />
        )}
      </div>
    </div>
  );
}

export default QuestionContainer;

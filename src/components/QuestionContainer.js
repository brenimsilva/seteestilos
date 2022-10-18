import React, { useContext, useState } from "react";
import questions from "./DATA/questions.json";
import Question from "./Question";
import ChoicesList from "./ChoicesList";
import { QuestionsContext } from "./store/questions-context";
import StatsPage from "./landing/StatsPage";
import style from "../components/styles/question_container.module.css";
import Header from "./UI/Header";
function QuestionContainer() {
  const [mostVoted, setMostVoted] = useState();
  const ctx = useContext(QuestionsContext);

  function calcMostVotedStyle() {
    let arrVotes = [];
    ctx.votes.forEach((vote) => {
      arrVotes = [...arrVotes, vote.count];
    });
    const numMaior = Math.max(...arrVotes);
    const maior = arrVotes.indexOf(numMaior);
    setMostVoted(ctx.votes[maior]);
  }

  function onConfirmVotes() {
    if(ctx.tempVotes.length === 0) {
      alert("Precisa escolher ao menos 1 opção");
    } else {
      ctx.addVotesToList();
      calcMostVotedStyle();
    }
  }

  function returnToPreviousPage() {
    ctx.returnToPreviousPage();
  }

  const questionsArray = questions.questions.map((question, index) => {
    return (
      <div key={index} className={style.container}>
        <Question
          index={index}
          text={question.question}
          key={index}
          maxChoices={questions.questions[index].choices}
        />
        <div>
          <ChoicesList
            key={index}
            choices={question.answers}
            maxChoices={questions.questions[index].choices}
          />
        </div>
        <div className={style.buttons}>
          {index > 0 ? (
            <button
              onClick={returnToPreviousPage}
              className={`${style.btn_back} ${style.btn}`}
            >
              Retornar
            </button>
          ) : (
            <div></div>
          )}
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
          <StatsPage mostVoted={mostVoted.type} />
        )}
      </div>
    </div>
  );
}

export default QuestionContainer;

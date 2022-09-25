import React, { useContext, useState } from "react";
import style from "../components/styles/question.module.css";
import questionsJson from "./DATA/questions.json";
import { QuestionsContext } from "./store/questions-context";

function Choice(props) {
  const img = require(`../imgs/${props.imgSrc}`);
  const ctx = useContext(QuestionsContext);
  function toggleSelectRemove() {
    ctx.toggleTempVotes({ vote: props.type, maxChoices: props.maxChoices });
  }
  console.log(ctx.tempVotes);
  const isSelected = ctx.tempVotes.includes(props.type);
  return (
    <React.Fragment>
      <li
        className={`${style.choice_container} ${
          isSelected ? style.selected : ""
        }`}
        onClick={toggleSelectRemove}
      >
        {props.text}: {props.type}
        <img src={img} className={style.choice_image}></img>
      </li>
    </React.Fragment>
  );
}

export default Choice;

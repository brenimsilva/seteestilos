import React, { useContext } from "react";
import style from "../components/styles/question.module.css";
import { QuestionsContext } from "./store/questions-context";

function Choice(props) {
  const img = props.imgSrc == "NONE" ? "" : require(`../imgs/pngs/${props.imgSrc}.png`);
  const ctx = useContext(QuestionsContext);
  function toggleSelectRemove() {
    ctx.toggleTempVotes({ vote: props.type, maxChoices: props.maxChoices });
  }
  const isSelected = ctx.tempVotes.includes(props.type);
  return (
    <li 
      className={`${style.choice_container} ${
        isSelected ? style.selected : ""
      }`}
      onClick={toggleSelectRemove}
    >
      <div className={style.div_image}>
        {props.imgSrc == "NONE" ? "" : <img src={ img} className={style.choice_image}></img>}
      </div>
      <div className={style.li_text}>
        <p>{props.text}</p>
        </div>
    </li>
  );
}

export default Choice;

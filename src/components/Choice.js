import React, { useState } from "react";
import style from "../components/styles/question.module.css";
import questionsJson from "./DATA/questions.json";
export default function Choice(props) {
  const [isSelected, setIsSelected] = useState(false);
  function onSelect() {
    props.onSelectChoice();
    setIsSelected(true);
  }
  function onRemove() {
    props.onRemoveChoice();
    setIsSelected(false);
  }

  function toggleSelectRemove() {
    if (isSelected) {
      onRemove();
    } else if (props.selectedChoices < props.maxChoices){
      onSelect();
    }
  }

  return (
    <React.Fragment>
      <li
        className={`${style.choice_container} ${
          isSelected ? style.selected : ""
        }`}
        onClick={toggleSelectRemove}
      >
        {props.text}: {props.type}
      </li>
    </React.Fragment>
  );
}

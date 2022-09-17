import React, { useContext, useState } from "react";
import style from "../components/styles/question.module.css";
import questionsJson from "./DATA/questions.json";
import { QuestionsContext } from "./store/questions-context";
function Choice(props) {
  const [isSelected, setIsSelected] = useState(false);
  const { addTempVotes, removeTempVotes } = useContext(QuestionsContext);

  function onSelect() {
    addTempVotes(props.type);
    props.onSelectChoice();
    setIsSelected(true);
  }
  function onRemove() {
    removeTempVotes(props.type);
    props.onRemoveChoice();
    setIsSelected(false);
  }

  function toggleSelectRemove() {
    if (isSelected) {
      onRemove();
    } else if (props.selectedChoices < props.maxChoices) {
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

export default Choice;

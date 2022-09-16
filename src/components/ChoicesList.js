import React, { useState } from "react";
import Choice from "./Choice";
import questions from "./DATA/questions.json";
import style from "./styles/question.module.css";
export default function ChoicesList(props) {
  const [choiceCount, setChoiceCount] = useState(0);

  function onSelectChoice() {
    setChoiceCount(choiceCount + 1);
    console.log(choiceCount);
  }
  function onRemoveChoice() {
    setChoiceCount(choiceCount - 1);
    console.log(choiceCount);
  }

  return (
    <React.Fragment>
      <ul>
        {props.choices.map((item, index) => {
          return (
            <Choice
              text={item.answer}
              type={item.type}
              key={index}
              index={index}
              maxChoices={props.maxChoices}
              onSelectChoice={onSelectChoice}
              onRemoveChoice={onRemoveChoice}
              selectedChoices={choiceCount}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
}
import React, { useState } from "react";
import Choice from "./Choice";
import style from "./styles/question.module.css";
function ChoicesList(props) {
  return (
    <React.Fragment>
      <ul className={style.choice_list}>
        {props.choices.map((item, index) => {
          return (
            <Choice
              text={item.answer}
              type={item.type}
              key={index}
              index={index}
              maxChoices={props.maxChoices}
              imgSrc={item.imgSrc}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default ChoicesList;

import React from "react";
import Choice from "./Choice";
import questions from "./DATA/questions.json";
export default function ChoicesList(props) {
  return (
    <React.Fragment>
      <ul>
        {props.choices.map((item, index) => {
          return <Choice text={item.answer} type={item.type} key={index} />;
        })}
      </ul>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import style from "./styles/question.module.css";

export default function Question(props) {
  return (
    <div>
      <div className={style.question_number_container}>
        <h3>{props.index + 1}</h3>
      </div>
      <h3>{props.text}</h3>
    </div>
  );
}

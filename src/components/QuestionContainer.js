import React from "react";
import questions from "./DATA/questions.json";
import Question from "./Question";
import ChoicesList from "./ChoicesList";
import Choice from "./Choice";
export default function QuestionContainer() {
  return (
    <div>
      {questions.map((question, index) => {
        return (
          <div key={index}>
            <Question index={index} text={question.question} key={index} />
            <ChoicesList choices={question.answers} />
          </div>
        );
      })}
    </div>
  );
}

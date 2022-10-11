import React from "react";
import questions from "../DATA/questions.json";
import style from "../styles/stats.module.css";

export default function StatsPage(props) {
  const styleText = questions.descriptions.find((element) => {
    return element.type === props.mostVoted;
  });

  return (
    <div className={style.container}>
      <h1 className={style.title}>Seu estilo é: {props.mostVoted}</h1>
      <h5 className={style.text}>{styleText.text}</h5>
      <h4 className={style.alterText}>COMPÕEM ESSE ESTILO</h4>
      {styleText.list.map((item) => {
        return <li className={style.list}>{item}</li>;
      })}
      <h4 className={style.alterText}>
        Você indicou ter outras preferencias de influência de outros estilos na
        proporção abaixo. E isso é o que te faz única.
      </h4>
    </div>
  );
}

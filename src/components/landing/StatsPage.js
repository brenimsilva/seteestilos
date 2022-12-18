import React from "react";
import questions from "../DATA/questions.json";
import style from "../styles/stats.module.css";

export default function StatsPage(props) {
  const styleText = questions.descriptions.find((element) => {
    return element.type === props.mostVoted;
  });

  //props.mostVoted = Titulo (Romantico, Dramatico, Elegante);
  //styleText.text = legenda do estilo
  //styleText.list = array de itens que compoe o estilo

  console.log(styleText.list);
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        SEU ESTILO É:
        <span className={style.estilo_negrito}>{props.mostVoted}</span>
      </h1>
      <h5 className={style.text}>{styleText.text}</h5>
      <h4 className={style.alterText}>COMPÕEM ESSE ESTILO</h4>
      <p>{styleText.list}</p>
      <ul>
        {styleText.list.map((item) => {
          return <li className={style.list}>{item}</li>;
        })}
      </ul>
      <h4 className={style.alterText}>
        Você indicou ter outras preferencias de influência de outros estilos na
        proporção abaixo. E isso é o que te faz única.
      </h4>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Retornar a pagina inicial
      </button>

      {
        //TESTE FACEBOOK
      }

      <a
        title="send to Facebook"
        href={`http://www.facebook.com/sharer.php?s=100&p[title]=YOUR_TITLE&p[summary]=Seu estilo é: ${props.mostVoted} </br> ${styleText.text} </br> ${styleText.list}YOUR_SUMMARY&p[url]=YOUR_URL&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT`}
        target="_blank"
      >
        <span>
          <img width="14" height="14" src="'icons/fb.gif" alt="Facebook" />{" "}
          Facebook
        </span>
      </a>
    </div>
  );
}

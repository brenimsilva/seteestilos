import React, { useState } from "react";
import questions from "../DATA/questions.json";
import style from "../styles/stats.module.css";

export default function StatsPage(props) {
  const styleText = questions.descriptions.find((element) => {
    return element.type === props.mostVoted;
  });

  //props.mostVoted = Titulo (Romantico, Dramatico, Elegante);
  //styleText.text = legenda do estilo
  //styleText.list = array de itens que compoe o estilo
  // https://twitter.com/intent/tweet?url=https://estilo.edineacorrea.com.br/&text=teste

  const msg = encodeURIComponent(
    `Meu estilo é: *${props.mostVoted}* \n \n ${styleText.text} \n \n Descubra também o seu estilo: https://estilo.edineacorrea.com.br`
  );
  const prefix = `whatsapp://send?text=`;
  const prefixTwitter = `https://twitter.com/intent/tweet?url=&text=`;
  const [url, setUrl] = useState({
    whatsapp: prefix + msg,
    twitter: prefixTwitter + msg,
  });

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
      <div className={style.buttons}>
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
          href={url.whatsapp}
          data-action="share/whatsapp/share"
          id={style.whatsapp}
          target="_blank"
        >
          <i class="fa-brands fa-whatsapp"></i> Compartilhar
        </a>
        <a href={url.twitter} target="_blank" id={style.twitter}>
          <i class="fa-brands fa-twitter"></i> Compartilhar
        </a>
      </div>
    </div>
  );
}

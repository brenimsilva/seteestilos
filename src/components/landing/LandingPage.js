import React from "react";
import Card from "../UI/Card";
import style from "../styles/text.module.css";
import Header from "../UI/Header";
export default function LandingPage(props) {
  return (
    <div className={style.allContainer}>
      <Header />
      <div className={style.container}>
        <div className={style.div_container}>
          <div className={style.text_container}></div>
        </div>

        <div className={style.body}>
          <Card>
            <h1 className={style.title}>Descubra seu estilo</h1>
            <p className={style.text}>
              Estilo está relacionado às escolhas pessoais, modo de ser, de
              pensar, de agir, de se comunicar, e vai se aprimorando ao longo da
              nossa vida conforme nossa vida, nossos gostos também mudam.
            </p>
            <p className={style.text}>
              E temos como ponto de partida a teoria da Americana Alyce Parson,
              que desenvolveu na década de 80 o conceito de “estilos universais”
              a partir de estudos sobre perfis e comportamentos de consumidores
              e foram organizados em sete estilos:
            </p>
            <p className={style.text}>
              tradicional, esportivo, elegante, romântico, sexy, dramático e
              criativo.
            </p>
            <p className={style.text}>
              Segundo essa ideia, nossa imagem não é formada por um único
              estilo, mas sim pela combinação de 2 ou 3 deles Esse teste foi
              realizado para lhe ajudar a descobrir seu modo de se mostrar ao
              mundo, seu estilo.
            </p>
            <div className={style.button_div}>
              <button className={style.button} onClick={props.onStartTest}>
                FAZER TESTE AGORA
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

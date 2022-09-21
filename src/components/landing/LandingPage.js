import React from "react";
import Card from "../UI/Card";
import style from "../styles/text.module.css";
import Header from "../UI/Header";
export default function LandingPage(props) {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.body}>
        <Card>
          <h1 className={style.title}>Descubra seu estilo</h1>
          <p className={style.text}>
            Faca nosso teste de estilo e receba dicas prsonalizadas, sugestoes
            de roupas e acessorios que tem a sua cara!
          </p>
          <button className={style.button} onClick={props.onStartTest}>
            FAZER TESTE AGORA
          </button>
        </Card>
      </div>
    </div>
  );
}

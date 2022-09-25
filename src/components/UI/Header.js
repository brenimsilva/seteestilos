import React from "react";
import style from "../styles/header.module.css";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={style.header}>
        <div className={style.header_div}>
          <img src="" alt="logo" />
          <h1>
            Teste de <span>estilo</span>
          </h1>
        </div>
        <hr className={style.hr} />
      </header>
    </React.Fragment>
  );
}

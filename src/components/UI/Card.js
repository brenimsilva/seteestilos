import React from "react";
import cardClass from "../styles/card.module.css";

export default function Card(props) {
  const classes = `${cardClass.card} ${props.class}`;
  return <div className={classes}>{props.children}</div>;
}

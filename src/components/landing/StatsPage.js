import React from 'react'

export default function StatsPage(props) {
  return (
    <div>
        <h1>Seu estilo é: {props.mostVoted}</h1>
        <p>{props.styleText}</p>
    </div>
  )
}

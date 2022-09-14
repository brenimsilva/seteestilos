import React from "react";

export default function Choice(props) {
  return (
    <React.Fragment>
      <li>
        {props.text}: {props.type}
      </li>
    </React.Fragment>
  );
}

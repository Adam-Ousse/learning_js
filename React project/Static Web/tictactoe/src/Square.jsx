import "./Square.css";
import React from "react";

export default function Square(props) {
  const [value, setValue] = React.useState(null);

  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}

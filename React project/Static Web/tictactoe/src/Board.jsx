import Square from "./Square";
import "./Board.css";
import React from "react";

function End(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}

function Outcome(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
      return squares[a];
    }
  }
  if (End(squares)) {
    return "D";
  } else {
    return "S";
  }
}
export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [gameEnded, setGameEnded] = React.useState("S");

  React.useEffect(() => {
    setGameEnded(Outcome(squares));
  }, [squares]);

  function handleClick(index) {
    console.log(`${index + 1} clicked`);
    setSquares((prevSquares) => {
      console.log(prevSquares);
      console.log(Outcome(prevSquares));
      if (Outcome(prevSquares) == "S") {
        const newSquares = prevSquares.slice();

        if (newSquares[index] !== null) {
          return newSquares;
        } else {
          const freeIndex = [];
          newSquares[index] = "X";
          for (let i = 0; i < 9; i++) {
            if (newSquares[i] === null) {
              freeIndex.push(i);
            }
          }
          if (freeIndex.length !== 0) {
            const randomIndex =
              freeIndex[Math.floor(Math.random() * freeIndex.length)];
            newSquares[randomIndex] = "O";
          }
        }
        return newSquares;
      }
      return prevSquares;
    });
  }
  return (
    <div className="game">
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      {gameEnded != "S" && <h1 className="game-state">Game ended</h1>}
      {gameEnded === "D" && <h1 className="game-state">Draw</h1>}
      {gameEnded === "X" && <h1 className="game-state">X wins</h1>}
      {gameEnded === "O" && <h1 className="game-state">O wins</h1>}
    </div>
  );
}

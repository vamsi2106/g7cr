import React, { useState } from "react";

export const TicTacToeGame = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [moves, setMoves] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const [winner, setWinner] = useState(null);

  const isOver = winner || moveCount === 9;
  const isStalemate = !winner && moveCount === 9;
  const winningPlayer = winner ? cells[winner[0]] : null;

  const move = (position) => {
    if (cells[position] || isOver) return false;

    const newCells = [...cells];
    newCells[position] = currentPlayer;

    setCells(newCells);
    setMoveCount((prevCount) => prevCount + 1);

    setMoves((prevMoves) => [
      ...prevMoves,
      { moveCount: moveCount + 1, position, player: currentPlayer },
    ]);

    setCurrentPlayer(currentPlayer === "O" ? "X" : "O");
    checkStatus(newCells);
    return true;
  };

  const checkStatus = (newCells) => {
    const winningCombos = [
      // row wins
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // column wins
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal wins
      [0, 4, 8],
      [2, 4, 6],
    ];

    const winnerCombo = winningCombos.find(([x, y, z]) => {
      return (
        newCells[x] &&
        newCells[x] === newCells[y] &&
        newCells[y] === newCells[z]
      );
    });

    setWinner(winnerCombo);
  };

  return (
    <div>
      <div className="board">
        {cells.map((cell, index) => (
          <div key={index} className="cell" onClick={() => move(index)}>
            {cell}
          </div>
        ))}
      </div>
      <div className="status">
        {winner
          ? `Winner: ${winningPlayer}`
          : isStalemate
          ? "Stalemate!"
          : `Next Player: ${currentPlayer}`}
      </div>
      <div className="moves">
        <h3>Moves:</h3>
        <ul>
          {moves.map((move, index) => (
            <li key={index}>
              Move {move.moveCount}: Player {move.player} to position{" "}
              {move.position}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

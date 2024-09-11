import React, { useReducer, useRef } from "react";
import { Status } from "./status-component.component";
import { GameBoard } from "./game-board.component";
import { GameMoves } from "./game-moves.component";
import Timer from "./timer.component";
import { PlayButton } from "./play-button.component";

// Define initial state
const initialState = {
  cells: Array(9).fill(null),
  currentPlayer: "O",
  moves: [],
  moveCount: 0,
  winner: null,
  isOver: false,
  isStalemate: false,
  message: "Next Player 'O'",
  timers: { O: 0, X: 0 },
  running: false,
  reset: false,
};

// Reducer function to manage state transitions
function gameReducer(state, action) {
  switch (action.type) {
    case "MOVE":
      const { position } = action.payload;
      if (state.cells[position] || state.isOver) return state;

      const newCells = [...state.cells];
      newCells[position] = state.currentPlayer;

      const newMoveCount = state.moveCount + 1;
      const nextPlayer = state.currentPlayer === "O" ? "X" : "O";

      const winnerCombo = checkWinner(newCells);
      const isOver = !!winnerCombo || newMoveCount === 9;
      const isStalemate = !winnerCombo && newMoveCount === 9;
      const winningPlayer = winnerCombo ? newCells[winnerCombo[0]] : null;

      return {
        ...state,
        cells: newCells,
        moveCount: newMoveCount,
        currentPlayer: nextPlayer,
        winner: winnerCombo,
        isOver,
        isStalemate,
        winningPlayer,
        moves: [
          ...state.moves,
          { moveCount: newMoveCount, position, player: state.currentPlayer },
        ],
        message: winnerCombo
          ? `'${winningPlayer}' Wins`
          : isStalemate
          ? "Stalemate"
          : `Next Player '${nextPlayer}'`,
      };

    case "RESET":
      return initialState;

    case "SET_RUNNING":
      return { ...state, running: action.payload };

    case "UPDATE_TIMER":
      return {
        ...state,
        timers: {
          ...state.timers,
          [action.payload.name]: action.payload.value,
        },
      };

    default:
      return state;
  }
}

function checkWinner(cells) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombos.find(([a, b, c]) => {
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

const Game = ({ onGameResult }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const timers = {
    O: useRef(),
    X: useRef(),
  };

  const handleMove = (id) => {
    if (state.isOver || state.cells[id]) return;

    dispatch({ type: "MOVE", payload: { position: id } });

    if (state.isOver) {
      onGameResult(state.winningPlayer);
      dispatch({ type: "SET_RUNNING", payload: false });
    }
  };

  const handlePlay = () => {
    // Reset both timers
    timers.O.current.reset();
    timers.X.current.reset();
    dispatch({ type: "RESET" });
    dispatch({ type: "SET_RUNNING", payload: true });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handlePause = (name, value) => {
    dispatch({ type: "UPDATE_TIMER", payload: { name, value } });
  };

  return (
    <div className="body">
      <div className="game-component">
        <Status message={state.message} />
        <PlayButton onClick={handlePlay} disabled={state.running} />

        <div className="same-row">
          <GameBoard
            winner={state.winner}
            cells={state.cells}
            onCellClick={handleMove}
          />
          <div>
            <div className="timers same-row">
              <Timer
                ref={timers.O}
                hideControls={true}
                running={state.currentPlayer === "O" && state.running}
                name="O"
                onPause={handlePause}
                reset={state.reset}
                onReset={handleReset}
              />
              <Timer
                ref={timers.X}
                running={state.currentPlayer === "X" && state.running}
                hideControls
                name="X"
                onPause={handlePause}
                reset={state.reset}
                onReset={handleReset}
              />
            </div>
            <GameMoves moves={state.moves} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

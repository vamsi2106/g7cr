import React, { useReducer } from "react";
import { GameScoreboard } from "./game-scoreboard.component";
import Game from "./game.component";
import Clock from "./clock.component";

// Reducer for managing game series state
const gameSeriesReducer = (state, action) => {
  switch (action.type) {
    case "X_WIN":
      return { ...state, X: state.X + 1, games: state.games + 1 };
    case "O_WIN":
      return { ...state, O: state.O + 1, games: state.games + 1 };
    case "DRAW":
      return { ...state, draw: state.draw + 1, games: state.games + 1 };
    case "TOGGLE_CLOCK":
      return { ...state, showClock: !state.showClock };
    default:
      return state;
  }
};

const initialState = {
  games: 0,
  X: 0,
  O: 0,
  draw: 0,
  showClock: false,
};

const GameSeries = () => {
  const [state, dispatch] = useReducer(gameSeriesReducer, initialState);

  const handleGameResult = (winner) => {
    if (winner === "X") dispatch({ type: "X_WIN" });
    else if (winner === "O") dispatch({ type: "O_WIN" });
    else dispatch({ type: "DRAW" });
  };

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_CLOCK" });
  };

  return (
    <div className="game-series-component">
      <GameScoreboard
        games={state.games}
        X={state.X}
        O={state.O}
        draw={state.draw}
      />
      <Game onGameResult={handleGameResult} />
      <button onClick={handleToggle}>
        {state.showClock ? "Hide Clock" : "Show Clock"}
      </button>
      {state.showClock && <Clock />}
    </div>
  );
};

export default GameSeries;

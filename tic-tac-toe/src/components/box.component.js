import React, { useReducer } from "react";

// Reducer function to handle box state (can be expanded)
const boxReducer = (state, action) => {
  switch (action.type) {
    case "CLICK":
      return state.winner || state.value
        ? state
        : { ...state, value: action.payload };
    default:
      return state;
  }
};

export const Box = ({ value, onCellClick, winner, id }) => {
  const initialState = { value, winner };
  const [state, dispatch] = useReducer(boxReducer, initialState);

  const clickHandler =
    state.winner || state.value
      ? null
      : () => {
          onCellClick(id);
          dispatch({ type: "CLICK", payload: value });
        };

  const style = {
    border: "0px",
    borderLeft: [0, 3, 6].includes(id) ? "0px" : "1px solid gray",
    borderTop: id > 2 ? "1px solid gray" : "0px",
    borderRight: [2, 5, 8].includes(id) ? "0px" : "1px solid gray",
    borderBottom: id < 6 ? "1px solid gray" : "0px",
    cursor: state.winner || state.value ? "not-allowed" : "pointer",
    backgroundColor:
      state.winner && state.winner.includes(id) ? "lightgreen" : "",
  };

  return (
    <button style={style} onClick={clickHandler} className="box-component">
      {state.value}
    </button>
  );
};

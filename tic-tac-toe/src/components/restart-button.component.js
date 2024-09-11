import React, { useEffect } from "react";

const RestartButton = ({ onRestart }) => {
  useEffect(() => {
    console.log("RestartButton mounted");
    return () => {
      console.log("RestartButton unmounted");
    };
  }, []);

  let style = {}; // default style from CSS

  if (!onRestart) {
    style = {
      backgroundColor: "gray",
      cursor: "not-allowed",
    };
  }

  return (
    <button
      style={style}
      onClick={onRestart || null}
      className="restart-component"
    >
      Play Again!
    </button>
  );
};

export default RestartButton;

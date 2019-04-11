import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import Icon from "./Icon.js";

const Player = ({
  //Destructuring Props
  playerName,
  score,
  key,
  id,
  index,
  isHighScore,
  changeScore,
  removePlayer
}) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          X
        </button>
        <Icon isHighScore={isHighScore} />
        {playerName}
      </span>
      <Counter score={score} changeScore={changeScore} index={index} />
    </div>
  );
};

export default Player;

import React from "react";

const Player = (props) => {
  return (
    <span className="player" key={props.player}>
      {props.player}
    </span>
  );
};

export default Player;

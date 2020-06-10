import React from "react";
import Player from "./Player/Player";

const Team = (props) => {
  return (
    <ul className="team">
      {props.players.map((player) => (
        <li>
          <Player player={player} />
        </li>
      ))}
    </ul>
  );
};

export default Team;

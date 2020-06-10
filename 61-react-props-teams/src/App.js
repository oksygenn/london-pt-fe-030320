import React, { useState } from "react";
import "./App.css";
import Player from "./components/Team/Player/Player";
import Team from "./components/Team/Team";

/**
 * Exercise:
 * 
 * 1. Render all players in default column. Column class - "players".
 * 1.1 Layout for player item 
 * <li>
 * 		<span>{player}</span>
		<button>Team 1</button>
		<button>Team 2</button>
	</li>
 * 2. Each player in default column should have button to move to team 1
 * and button to move to team 2
 * 3. Create component <Team /> and pass players from each team to it.
 * 4. Create <Player /> component and inside <Team /> component use it to render
 * each player.
 * 5. When I click on a button to move a player to the selected team, that player 
 * should be removed from the main column and added to the coresponding team.
 * 6. div rendered by <Team/> should have class "team"
 * 7. div rendered by <Player/> should have class "player"
 */

const App = () => {
  const [players, setPlayers] = useState([
    "Tom",
    "Sam",
    "Vasile",
    "Guy",
    "Ben",
    "Daniel",
    "Ed",
    "Alex",
    "Andrew",
    "Mat",
  ]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const moveToTeam = (player, team, setTeam) => {
    const newPlayers = players.filter((el) => el !== player);
    setPlayers(newPlayers);
    setTeam([...team, player]);
  };

  return (
    <div className="app">
      <div className="players">
        Players:
        <ul>
          {players.map((player) => (
            <li>
              <Player player={player} />
              <button onClick={() => moveToTeam(player, team1, setTeam1)}>
                Team 1
              </button>
              <button onClick={() => moveToTeam(player, team2, setTeam2)}>
                Team 2
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="team-one">
        Team 1:
        <Team players={team1} />
      </div>
      <div className="team-two">
        Team 2:
        <Team players={team2} />
      </div>
    </div>
  );
};

export default App;

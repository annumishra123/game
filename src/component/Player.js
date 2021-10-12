import React from "react";
import scissors from "../assets/scissors.png";
import paper from "../assets/paper.png";
import rock from "../assets/rock.jpg";


const Player = ({weapon}) => {
return(
  <div className="player">
    <img className="player-image" src={weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper}/>
  </div>
)
}

export default Player;
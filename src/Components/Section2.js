import "./Section.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import game from "../Images/game.jpg";

const Section2 = () => {
  return (
    <div className="temp">
        <div className="tempp">
            <img src={game} alt="img"></img>
            <div className="title">Gameroom</div>
            <div className="content">
                <p>A collection of games (TicTacToe,Connect4)created in python and data of wins and losses for Connect4 is stored in SQL</p>
                <div className="button">
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>


            </div>

        </div>


      
    </div>
    
      
    
  )
}

export default Section2;

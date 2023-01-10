import "./bg.css";
import React from 'react';
import Bgi from "../Images/bg.jpg";
import { Link } from "react-router-dom";

const Bg = () => {
  return (
    <div className="temp">
      <div className="tempp">
        <img className="img" src={Bgi} alt="Bgi"/>
      </div>
      <div className="info">
        <p className="imp">Akash Jayathirtha</p>
        <h1 className="impp">Personal Website</h1>
        <div className="btnn">
          <Link to="/About" className="btn">About</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Bg;

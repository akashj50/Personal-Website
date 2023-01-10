import "./Section.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import web from "../Images/web.jpg";

const Section = () => {
  return (
    <div className="temp">
        <div className="tempp">
            <img src={web} alt="img"></img>
            <div className="title">Personal Website</div>
            <div className="content">
                <p>A website designed using the React framework (HTML,CSS,Javascript)</p>
                <div className="button">
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>


            </div>

        </div>


      
    </div>
  )
}

export default Section;

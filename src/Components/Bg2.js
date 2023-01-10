import"./bg2.css";
import React, { Component } from 'react';
import Bg2i from "../Images/bg2.jpg";
import Section from "./Section";

class Bg2 extends Component {
    render(){

        return (
            <div className="head">
                <div className="imgs">
                    <img className="img" src={Bg2i} alt="Bg2i"/>
                </div>
                <div className="info">
                    <p className="imp">{this.props.heading}</p>
                    <h1 className="impp">{this.props.text}</h1>
                </div>
              
            </div>

        )
    }
 
}

export default Bg2;

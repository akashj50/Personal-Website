import "./Footer.css";
import React from 'react';
import {FaFacebook} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

const Footer = () => {
  return (
    
    <div className="footer">
      <div className="l">
        <p>Copyright &copy; 2023 Akash Jayathirtha</p>
      </div>
      <div className="r">
        <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        <SiGmail size={20} style={{color:"#fff",marginRight:"2rem"}}/>
      </div>
    </div>
  )
}

export default Footer;

import "./Form.css";
import React from 'react';

const Form = () => {
  return (
    <div className="form">
        <form action="https://formspree.io/f/mrgvgjpb" method="POST">
            <label>Name</label>
            <input type="text" name="text"></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Phone Number</label>
            <input type="tel" name="tel"></input>
            <label>Message</label>
            <textarea rows="5" name="text"/>
            <button className="btn" name="button">Submit</button>
        </form>
      
    </div>
  )
}

export default Form;




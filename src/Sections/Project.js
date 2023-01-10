import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Bg2 from '../Components/Bg2';
import Section from '../Components/Section';
import Section2 from '../Components/Section2';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Bg2 heading="Projects" text="These are my projects"/>
      <Section/>
      <Section2/>
      <Footer/>
    </div>
  )
}

export default Project;

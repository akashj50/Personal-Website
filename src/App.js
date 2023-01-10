import logo from './logo.svg';
import './App.css';
import Home from "./Sections/Home";
import Contact from "./Sections/Contact";
import Project from "./Sections/Project";
import About from "./Sections/About";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>  
    
  );
}

export default App;

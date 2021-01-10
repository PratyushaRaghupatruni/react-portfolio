/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import './App.css';
// import Main from './Pages/Main/main';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ProjectList from './Components/ProjectList';
import About from './Components/About';
import TechStack from './Components/TechStack';
import Adjuster from './Components/Adjuster';
import { BrowserRouter as Router }from 'react-router-dom';

function App() {
  return (
		<div className='App'>
        <Router>
			          
        <Navbar />
        <Home />
        <About/>
		<TechStack />
		<Adjuster />
        <ProjectList/>
        <Footer />
    
		</Router>
		</div>
  );
}

export default App;

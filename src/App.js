/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import './App.css';
// import Main from './Pages/Main/main';
import Nav from './Components/Nav';
import Footer from './Components/Footer'
import ProjectList from './Components/ProjectList';
import About from './Components/About';
import { BrowserRouter as Router }from 'react-router-dom';

function App() {
  return (
		<div className='background-img'>
        <Router>
			     <Nav />
			     <About />	
			  	 <ProjectList />
           <Footer />
		</Router>
		</div>
  );
}

export default App;

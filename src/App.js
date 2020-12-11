/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import './App.css';
// import Main from './Pages/Main/main';
import Nav from './Components/Nav';
import Footer from './Components/Footer'
import ProjectList from './Pages/ProjectList/projectlist';
import About from './Components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
		<div className='background-img'>
   <Router>
				{/* Router */}
			 <Nav />
				<Switch>
					{/* <Route exact path="/" exact component={Main} />
					<Route path="/portfolio" exact component={ProjectList} />
					<Route path="/about" exact component={About} /> */}
					 <Route exact path={"/"}>
              <About />
            </Route>
				 	  <Route exact path="/portfolio"><ProjectList /></Route>
					  <Route>
              <About />
            </Route>
				</Switch>
       <Footer />
		</Router>
		</div>
  );
}

export default App;

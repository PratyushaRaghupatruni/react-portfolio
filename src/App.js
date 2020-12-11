/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import './App.css';
import Main from './Pages/Main/main';
import ProjectList from './Pages/ProjectList/projectlist';
import About from './Components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <Router>
				{/* Router */}
				<Switch>
					// eslint-disable-next-line react/jsx-no-duplicate-props
					<Route exact path="/" exact component={Main} />
					<Route path="/portfolio" exact component={ProjectList} />
					<Route path="/about" exact component={About} />
				</Switch>

		</Router>
  );
}

export default App;

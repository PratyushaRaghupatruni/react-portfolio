
import './App.css';
import Main from './Pages/Main/main';
import Projects from './Components/Projects';
import About from './Components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <Router>
				{/* Router */}
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/projects" exact component={Projects} />
					<Route path="/about" exact component={About} />
				</Switch>

		</Router>
  );
}

export default App;

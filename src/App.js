
import './App.css';
import Main from './Pages/Main/main';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <Router>
				{/* Router */}
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/portfolio" exact component={Portfolio} />
					<Route path="/about" exact component={About} />
				</Switch>

		</Router>
  );
}

export default App;

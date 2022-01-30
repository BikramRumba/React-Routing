import About from './components/About';
import './App.css';
import Nav from './components/Nav';
import Shop from './components/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className="App">
      <Nav/>
      <Switch>

      <Route  path="/" exact component={Home} />
     <Route path= "/about" component={About} />
     <Route path= "/shop" component={Shop} />
     </Switch>

    </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1>Homepage</h1>
  </div>
)

export default App;

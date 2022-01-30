import About from './components/About';
import './App.css';
import Nav from './components/Nav';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About />
      <Shop/>
    </div>
  );
}

export default App;

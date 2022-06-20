import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
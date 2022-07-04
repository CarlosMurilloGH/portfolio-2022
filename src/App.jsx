import './App.css';
import NavbarComponent from './components/Navbar';
import Home from './routes/Home/Home';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Home />
    </div>
  );
}

export default App;

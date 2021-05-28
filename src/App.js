import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
    </div>
  );
}

export default App;

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
      <Summary></Summary>
      <Projects></Projects>
    </div>
  );
}

export default App;

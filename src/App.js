import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Index from './views/Index';
import Portfolio from './views/Portfolio';

export default function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component = {Index} />
          <Route exact path="/contact" component = {Contact} />
          <Route exact path="/portfolio" component = {Portfolio} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>      
    );
}

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import ScrollToTop from './utils/ScorllToTop';
import Index from './views/Index';
import Portfolio from './views/Portfolio';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav></Nav>

      {/* Render different pages */}
      <Switch>
        <Route exact path="/" component = {Index} />
        <Route exact path="/contact" component = {Contact} />
        <Route exact path="/portfolio" component = {Portfolio} />

      </Switch>
      
      <Footer></Footer>
    </Router>      
    );
}

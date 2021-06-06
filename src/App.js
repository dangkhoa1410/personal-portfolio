import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import IndexPage from './views/IndexPage'
import ContactPage from './views/ContactPage'
import PortfolioPage from './views/PortfolioPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav></Nav>

      {/* Render different pages */}
      <Switch>
        <Route exact path="/" component = {IndexPage} />
        <Route exact path="/contact" component = {ContactPage} />
        <Route exact path="/portfolio" component = {PortfolioPage} />

      </Switch>
      
      <Footer></Footer>
    </Router>      
    );
}

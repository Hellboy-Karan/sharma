import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './css/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact ><Home /></Route>
          <Route path='/about' exact ><About /></Route>
          <Route path='/gallery' exact ><Gallery /></Route>
          <Redirect to='/' />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

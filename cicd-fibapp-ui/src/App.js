import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutPage from './AboutPage'
import Fib from './Fib'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/aboutpage">About</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/aboutpage" component={AboutPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

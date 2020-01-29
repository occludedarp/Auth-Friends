import React from 'react';
import './styles/App.css';
import login from './components/login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom' ;

function App() {
  return (
    <Router>
      <div className="App">
        <h3>Hi there!</h3>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import PrivateRoute from './components/privateRoute'
import FriendForm from './components/friendForm'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        <PrivateRoute exact path="/friends" component={FriendForm}/>
      </div>
    </Router>
  );
}

export default App;

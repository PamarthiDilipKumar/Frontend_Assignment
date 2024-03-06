// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import GameScreen from './GameScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/game" component={GameScreen} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;

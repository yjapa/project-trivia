import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Config from './pages/Config';
import Ranking from './pages/Ranking';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/game" component={ Game } />
      <Route path="/config" component={ Config } />
      <Route path="/ranking" component={ Ranking } />
    </Switch>
  );
}

export default App;

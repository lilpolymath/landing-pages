import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Landing from './screens/Landing';
import HeroOne from './screens/One';
import HeroTwo from './screens/Two';
import HeroThree from './screens/Three';
import HeroFour from './screens/Four';
import HeroFive from './screens/Five';
import HeroSeven from './screens/Seven';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/one'>
          <HeroOne />
        </Route>
        <Route path='/two'>
          <HeroTwo />
        </Route>
        <Route path='/three'>
          <HeroThree />
        </Route>
        <Route path='/four'>
          <HeroFour />
        </Route>
        <Route path='/five'>
          <HeroFive />
        </Route>
        <Route path='/six' render={() => <div>404</div>}>
          <HeroFive />
        </Route>
        <Route path='/seven'>
          <HeroSeven />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

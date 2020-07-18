import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import HeroOne from './screens/One';
import HeroTwo from './screens/Two';
import HeroThree from './screens/Three';
import HeroFour from './screens/Four';
import HeroFive from './screens/Five';
import HeroSeven from './screens/Seven';
import Nav from './screens/nav'

function App() {
  return (
    // <div>
    //   <HeroOne />
    //   <HeroTwo />
    //   <HeroThree />
    //   <HeroFour />
    //   <HeroFive />
    //   <HeroSeven />
    // </div>
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/one'>
          <HeroOne />
        </Route>
        <Route path='/two'>
          <HeroTwo />
        </Route>
        <Route path='/three'>
          <HeroThree />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HeroOne from './screens/One';
import HeroTwo from './screens/Two';
// import HeroThree from './screens/Three';
// import HeroFour from './screens/Four';
// import HeroFive from './screens/Five';
// import HeroSeven from './screens/Seven';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <ul>
                <li>
                  <Link to='/one'>One</Link>
                </li>
                <li>
                  <Link to='/two'>Two</Link>
                </li>
              </ul>
            )}
          ></Route>
          <Route path='/one'>
            <HeroOne />
          </Route>
          <Route path='/two'>
            <HeroTwo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

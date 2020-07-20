import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
      <div>
        <Switch>
          <Route
            exact
            path='/'
            // render={() => (
            //   <ul>
            // <li>
            //   <Link style={{ color: 'black' }} to='/one'>
            //     One
            //   </Link>
            // </li>
            //     <li>
            //       <Link style={{ color: 'black' }} to='/two'>
            //         Two
            //       </Link>
            //     </li>
            //     <li>
            //       <Link style={{ color: 'black' }} to='/three'>
            //         Three
            //       </Link>
            //     </li>
            //     <li>
            //       <Link style={{ color: 'black' }} to='/four'>
            //         Four
            //       </Link>
            //     </li>
            //     <li>
            //       <Link style={{ color: 'black' }} to='/five'>
            //         Five
            //       </Link>
            //     </li>
            //     <li>
            //       <Link style={{ color: 'black' }} to='/seven'>
            //         Seven
            //       </Link>
            //     </li>
            //   </ul>
            // )}
          >
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
          <Route path='/seven'>
            <HeroSeven />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

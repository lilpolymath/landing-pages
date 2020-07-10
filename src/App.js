import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

// import HeroOne from './screens/Hero1';
// import HeroTwo from './screens/Hero2';
import HeroThree from './screens/Hero3';

function App() {
  return (
    <div>
      <HeroThree />
    </div>
    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to='/one'>One</Link>
    //       </li>
    //       <li>
    //         <Link to='/two'>Two</Link>
    //       </li>
    //       <li>
    //         <Link to='/three'>Three</Link>
    //       </li>
    //     </ul>

    //     <hr />
    //     <Switch>
    //       <Route exact path='/one'>
    //         <HeroOne />
    //       </Route>
    //       <Route path='/two'>
    //         <HeroTwo />
    //       </Route>
    //       <Route path='/three'>
    //         <HeroThree />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;

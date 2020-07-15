import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

// import HeroOne from './screens/One';
// import HeroTwo from './screens/Two';
// import HeroThree from './screens/Three';
// import HeroFour from './screens/Four';
// import HeroFive from './screens/Five';
import HeroSeven from './screens/Seven';

function App() {
  return (
    <div>
      {/* <HeroOne /> */}
      {/* <HeroTwo /> */}
      {/* <HeroThree /> */}
      {/* <HeroFour /> */}
      {/* <HeroFive /> */}
      <HeroSeven />
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

import React, { Component } from 'react';

import NavBar from './NavBar';
import Hero from './Hero';
import Footer from './Footer';

export class HeaderOne extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <Footer />
      </>
    );
  }
}

export default HeaderOne;

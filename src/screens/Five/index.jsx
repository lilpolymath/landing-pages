import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import './style.css';

export class HeroFive extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
      </>
    );
  }
}

export default HeroFive;

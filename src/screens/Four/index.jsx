import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import './style.css';

export class HeroThree extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
      </>
    );
  }
}

export default HeroThree;

import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import styles from './style.module.css';

export class HeroSeven extends Component {
  render() {
    return (
        <>
          <NavBar />
          <Hero />
        </>
    );
  }
}

export default HeroSeven;

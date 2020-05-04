import React, { Component } from 'react';
import './style.css';
import NavBar from './NavBar';
import Hero from './Hero';

export class HeaderOne extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <footer></footer>
      </>
    );
  }
}

export default HeaderOne;

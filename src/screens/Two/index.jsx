import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';

import Container from '../../common/Container';
// import backgroundImage from './G.svg'

export class HeroTwo extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <Hero />
      </Container>
    );
  }
}

export default HeroTwo;

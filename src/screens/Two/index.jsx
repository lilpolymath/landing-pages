import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';

import Container from '../../common/Container';
// import backgroundImage from './G.svg'

export class HeroTwo extends Component {
  render() {
    return (
      <Container color="black" bgColor="#f4f4f4">
        <NavBar />
        <Hero />
      </Container>
    );
  }
}

export default HeroTwo;

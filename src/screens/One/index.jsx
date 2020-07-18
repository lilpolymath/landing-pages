import React, { Component } from 'react';

import Container from '../../common/Container';
import backgroundImage from './G.svg'

import NavBar from './NavBar';
import Hero from './Hero';
import Footer from './Footer';

export class HeaderOne extends Component {
  render() {
    return (
      <Container backgroundImage={backgroundImage} color="white" bgColor="#4737ff">
        <NavBar />
        <Hero />
        <Footer />
      </Container>
      
    );
  }
}

export default HeaderOne;

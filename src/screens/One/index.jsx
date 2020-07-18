import React, { Component } from 'react';

import Container from '../../common/Container';
import styles from './style.module.css';

import NavBar from './NavBar';
import Hero from './Hero';
import Footer from './Footer';

export class HeaderOne extends Component {
  render() {
    return (
      <Container styles={styles.body}>
        <NavBar />
        <Hero />
        <Footer />
      </Container>
    );
  }
}

export default HeaderOne;

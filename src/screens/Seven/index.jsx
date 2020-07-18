import React, { Component } from 'react';

import Container from "../../common/Container"
import NavBar from './NavBar';
import Hero from './Hero';
import styles from './style.module.css';

export class HeroSeven extends Component {
  render() {
    return (
        <Container styles={styles.body}>
          <NavBar />
          <Hero />
        </Container>
    );
  }
}

export default HeroSeven;

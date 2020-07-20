import React, { Component } from 'react';
import Landing from './Landing';

import Container from '../../common/Container';
import styles from './style.module.css';

export class Main extends Component {
  render() {
    return (
      <Container styles={styles.center}>
        <Landing />
      </Container>
    );
  }
}

export default Main;

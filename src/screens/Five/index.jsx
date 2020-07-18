import React, { Component } from 'react';

import Container from "../../common/Container"
import NavBar from './NavBar';
import Hero from './Hero';
import style from "./style.module.css"

export class HeroFive extends Component {
  render() {
    return (
      <Container styles={style.body}>
        <NavBar />
        <Hero />
      </Container>
    );
  }
}

export default HeroFive;

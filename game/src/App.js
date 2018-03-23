import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Stats from './Stats'
import ClickArea from './ClickArea'
import FlyingClick from './FlyingClick'
import SolveBlocks from './SolveBlocks'
import GetCoins from './GetCoins'
import BackgroundMusic from './BackgroundMusic'
import StringAnimation from './StringAnimation'
import Menu from './Menu'

import 'font-awesome/css/font-awesome.min.css'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Grid fluid className="centered">
        <Row>
          <Col md={3} lg={3}>
            <Menu />
          </Col>
          <Col md={6} lg={6}>
            <FlyingClick />
            <ClickArea />
            <Stats />
            <SolveBlocks />
            <GetCoins />
          </Col>
          <Col md={3} lg={3}>
            <BackgroundMusic />
            <StringAnimation />
          </Col>
        </Row>
      </Grid>
    )
  }
}
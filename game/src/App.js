import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Stats from './Stats'
import ClickArea from './ClickArea'
import FlyingClick from './FlyingClick'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Grid fluid className="centered">
        <Row>
          <Col md={3} lg={3}>
            Hello, world!
          </Col>
          <Col md={6} lg={6}>
            <FlyingClick />
            <ClickArea />
            <Stats />
          </Col>
          <Col md={3} lg={3}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    );
  }
}

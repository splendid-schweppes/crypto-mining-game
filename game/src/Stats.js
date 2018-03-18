import React, { Component } from 'react';

const currentHashingRate = 0.005
const blocksSolved = 0
const assets = 0

export default class Stats extends Component {
  render() {
    return (
      <div>
        <p>Current hashing rate: {currentHashingRate}</p>
        <p>Blocks solved: {blocksSolved}</p>
        <p>Assets: {assets}</p>
      </div>
    )
  }
}

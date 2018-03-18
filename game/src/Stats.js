import React, { Component } from 'react';
import {connect} from 'react-redux'

const assets = 0

class Stats extends Component {
  render() {
    return (
      <div>
        <p>Current hashing rate: {this.props.hashingRate.toFixed(3)}/s</p>
        <p>Blocks solved: {this.props.blocks.toFixed(3)}/30</p>
        <p>Coins: {this.props.coins}</p>
        <p>Assets: {assets}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    blocks: state.blocks,
    coins: state.coins,
    hashingRate: state.hashingRate
  }
}

export default connect(mapStateToProps)(Stats)

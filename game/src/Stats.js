import React, { Component } from 'react';
import {connect} from 'react-redux'

class Stats extends Component {
  render() {
    return (
      <div>
        <p>Current hashing rate: {this.props.hashingRate.toFixed(3)}/s</p>
        <p>Blocks solved: {this.props.blocks.toFixed(3)}/30</p>
        <p>Coins: {this.props.coins}</p>
        <p>Assets: {this.props.assets}</p>
        <p>Electricity required: {this.props.electricity}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    blocks: state.blocks,
    coins: state.coins,
    hashingRate: state.hashingRate,
    assets: 0,
    electricity: 0
  }
}

export default connect(mapStateToProps)(Stats)

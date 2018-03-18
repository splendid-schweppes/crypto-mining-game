import React, { Component } from 'react';
import {connect} from 'react-redux'

const blocksSolved = 0
const assets = 0

class Stats extends Component {
  render() {
    return (
      <div>
        <p>Current hashing rate: {this.props.hashingRate.toFixed(3)}</p>
        <p>Blocks solved: {blocksSolved}</p>
        <p>Assets: {assets}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hashingRate: state.hashingRate
  }
}

export default connect(mapStateToProps)(Stats)

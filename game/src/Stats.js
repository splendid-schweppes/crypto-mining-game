import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sumBy} from 'lodash'
import './Stats.css'

class Stats extends Component {
  render() {
    return (
      <div className="stats-container">
      <div className="fakeMenu">
        <div className="fakeButtons fakeClose"></div>
        <div className="fakeButtons fakeMinimize"></div>
        <div className="fakeButtons fakeZoom"></div>
      </div>
      <div className="fakeScreen">
        <p className="terminal-text">
          Hashing speed: <span className="terminal-highlight">{this.props.hashingRate.toFixed(3)}/s</span>
        </p>
        <p className="terminal-text">
          + from assets: <span className="terminal-highlight">{this.props.hashingRateFromAssets.toFixed(3)}/s</span>
        </p>
        <p className="terminal-text">
          Blocks solved: <span className="terminal-highlight">{this.props.blocks.toFixed(3)}/30</span>
        </p>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    blocks: state.blocks,
    coins: state.coins,
    hashingRate: state.hashingRate,
    assets: state.assets,
    hashingRateFromAssets: sumBy(state.assets, 'hashingRate'),
    electricity: sumBy(state.assets, 'electricity')
  }
}

export default connect(mapStateToProps)(Stats)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sumBy} from 'lodash'
import './Stats.css'

class RightSideStats extends Component {
  render() {
    return (
      <div className="stats-container">
      <div className="player-electricity">
        <strong>{this.props.electricity} / 0</strong>
        <i className="fa fa-bolt status-icons" aria-hidden="true"></i>
      </div>
      <div className="player-wallet">
        <strong>{this.props.coins}</strong>
        <i className="fa fa-usd status-icons" aria-hidden="true"></i>
      </div>
      <div className="player-level">
        <strong>0 / 20</strong>
        <i className="fa fa-level-up status-icons" aria-hidden="true"></i>
      </div>
      {
        //  <p>Assets: {this.props.assets.length}</p>
        // <p>Electricity required: {this.props.electricity}</p>
      }
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
    electricity: sumBy(state.assets, 'electricityCost')
  }
}

export default connect(mapStateToProps)(RightSideStats)

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sumBy} from 'lodash'

import './RightSideStats.css'

class RightSideStats extends Component {
  render() {
    return (
      <div className="stats-container">
        <div className="player-electricity rightside-stats">
          <strong className="rightside-stats-text">Electricity: {this.props.electricity.toFixed(0)}</strong>
          <i className="fa fa-bolt status-icons" aria-hidden="true"></i>
        </div>
        <div className="player-coins rightside-stats">
          <strong className="rightside-stats-text">Coins: {this.props.coins}</strong>
          <i className="fa fa-connectdevelop status-icons" aria-hidden="true"></i>
        </div>
        <div className="player-wallet rightside-stats">
          <strong className="rightside-stats-text">Cash: {this.props.money.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</strong>
          <i className="fa fa-usd status-icons" aria-hidden="true"></i>
        </div>
        <div className="player-level rightside-stats">
          <strong className="rightside-stats-text">Level: {this.props.achievements.length} / 20</strong>
          <i className="fa fa-level-up status-icons" aria-hidden="true"></i>
        </div>
        <div className="player-assets rightside-stats">
          <strong className="rightside-stats-text">Assets: {this.props.assets.length}</strong>
          <i className="fa fa-sitemap status-icons" aria-hidden="true"></i>
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
    electricity: state.electricity,
    money: state.money,
    achievements: state.achievements
  }
}

export default connect(mapStateToProps)(RightSideStats)

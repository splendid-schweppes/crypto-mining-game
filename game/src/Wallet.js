import React, { Component } from 'react'
import {connect} from 'react-redux'

class Wallet extends Component {
  render() {
    return (
      <div className="menu-item">
        <div>
          <h3>Account Balance</h3>
          <p>
            <strong className="wallet-coins">{this.props.coins} </strong>
            Trollcoins <i className="fa fa-connectdevelop"></i>
          </p>
          <p>0 $ <i className="fa fa-credit-card"></i></p>
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
    assets: 0,
    electricity: 0
  }
}

export default connect(mapStateToProps)(Wallet)

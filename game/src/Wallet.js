import React, { Component } from 'react'
import {connect} from 'react-redux'

class Wallet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: props.coins
    }

    this.changeCoinCount = this.changeCoinCount.bind(this)
    this.sellCoins = this.sellCoins.bind(this)
  }

  changeCoinCount({target}) {
    if (target.value >= 0 && target.value <= this.props.coins) {
      this.setState({coins: target.value})
    }
  }

  sellCoins() {
    if (this.state.coins >= 0) {
      this.props.sellCoins(this.state.coins)
      this.setState({coins: this.props.coins - this.state.coins})
    }
  }

  render() {
    return (
      <div className="menu-item wallet">
        <div>
          <h3>Account Balance</h3>
          <p>
            <strong className="wallet-coins">{this.props.coins}</strong>{' '}
            Trollcoins <i className="fa fa-connectdevelop"></i>
          </p>
          <p>${this.props.money.toFixed(2)} <i className="fa fa-credit-card"></i></p>
          <div>
            <input type="number" value={this.state.coins} onChange={this.changeCoinCount} step="1" min="1" className=""/>
            <button onClick={this.sellCoins} className="sell-coins-button">
              Sell
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    coins: state.coins,
    money: state.money
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  sellCoins: count => {
    dispatch({type: 'SELL_COINS', count})
    dispatch({type: 'REMOVE_COINS', count})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)

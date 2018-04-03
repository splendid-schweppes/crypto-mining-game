import React, { Component } from 'react'
import {connect} from 'react-redux'
import {random} from 'lodash'
import {loadSellingRate, saveSellingRate} from './Util'

const getRandomSellingRate = () => random(10, 1100, true)
const getRandomInterval = () => random(30000, 60000, true)

class Market extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: props.coins,
      coin_conversion_rate: loadSellingRate()
    }

    this.changeCoinCount = this.changeCoinCount.bind(this)
    this.sellCoins = this.sellCoins.bind(this)
  }

  componentDidMount() {
    const changeCryptoMarkets = () => {
      const rate = getRandomSellingRate();
      this.setState({ coin_conversion_rate: rate });
      saveSellingRate(rate);
      setTimeout(changeCryptoMarkets, getRandomInterval());
    }
    setTimeout(changeCryptoMarkets, getRandomInterval());

    // this.interval = setInterval(() => {
    //   const rate = getRandomConversionRate();
    //   this.setState({ coin_conversion_rate: rate });
    //   saveSellingRate(rate);
    // }, 30000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  changeCoinCount({target}) {
    if (target.value >= 0 && target.value <= this.props.coins) {
      this.setState({coins: target.value})
    }
  }

  sellCoins(rate) {
    if (this.state.coins >= 0) {
      this.props.sellCoins(this.state.coins, rate)
      this.setState({coins: this.props.coins - this.state.coins})
    }
  }

  render() {
    return (
      <div className="menu-item wallet">
        <div>
          <h3>Crypto Exchange</h3>
          <p>Current rate for selling</p>
          <p><strong>{this.state.coin_conversion_rate.toFixed(2)}</strong></p>
          <div>
            <input type="number" value={this.state.coins} onChange={this.changeCoinCount} step="1" min="1" />
            <button onClick={() => this.sellCoins(this.state.coin_conversion_rate)} className="sell-coins-button">
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
  sellCoins: (count, rate) => {
    dispatch({type: 'SELL_COINS', count, rate})
    dispatch({type: 'REMOVE_COINS', count})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Market)

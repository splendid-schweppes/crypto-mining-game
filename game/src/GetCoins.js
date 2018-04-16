import { Component } from 'react'
import {connect} from 'react-redux'

import {blocksToCoin} from './Config'

class GetCoins extends Component {
  componentDidUpdate() {
    if (this.props.blocks >= blocksToCoin) {
      this.props.getCoin()

      if (this.props.coinlog >= 10) {
        this.props.tenCoinAchievement()
      }

      if (this.props.coinlog >= 50) {
        this.props.fiftyCoinAchievement()
      }

      if (this.props.coinlog >= 100) {
        this.props.hundredCoinAchievement()
      }

      if (this.props.coinlog >= 1000) {
        this.props.thousandCoinAchievement()
      }

      if (this.props.coinlog >= 1000000) {
        this.props.millionCoinAchievement()
      }
    }
  }

  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  getCoin: () => {
    dispatch({type: 'GET_COIN'})
    dispatch({type: 'COINLOG_ADD'})
    dispatch({type: 'RESET_BLOCK'})
    dispatch({type: 'ACHIEVEMENT_FIRST_COIN'})
  },
  tenCoinAchievement: () => {
    dispatch({type: 'ACHIEVEMENT_TEN_COINS'})
  },
  fiftyCoinAchievement: () => {
    dispatch({type: 'ACHIEVEMENT_FIFTY_COINS'})
  },
  hundredCoinAchievement: () => {
    dispatch({type: 'ACHIEVEMENT_HUNDRED_COINS'})
  },
  thousandCoinAchievement: () => {
    dispatch({type: 'ACHIEVEMENT_THOUSAND_COINS'})
  },
  millionCoinAchievement: () => {
    dispatch({type: 'ACHIEVEMENT_MILLION_COINS'})
  }
})

const mapStateToProps = state => {
  return {
    coinlog: state.coinlog,
    blocks: state.blocks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetCoins)

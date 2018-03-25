import { Component } from 'react'
import {connect} from 'react-redux'

import {blocksToCoin} from './Config'

class GetCoins extends Component {
  componentDidUpdate() {
    if (this.props.blocks >= blocksToCoin) {
      this.props.getCoin()


      // TODO: does not take into account spent coins, need to have some sort of log for them
      if (this.props.coins >= 10) {
        this.props.tenCoinAchievement()
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
    dispatch({type: 'RESET_BLOCK'})
    dispatch({type: 'ACHIEVEMENT_FIRST_COIN'})
  },
  tenCoinAchievement: () => {
    dispatch({type: 'ACHIEVEMENT_TEN_COINS'})
  }
})

const mapStateToProps = state => {
  return {
    coins: state.coins,
    blocks: state.blocks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetCoins)

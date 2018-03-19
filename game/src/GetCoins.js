import { Component } from 'react'
import {connect} from 'react-redux'

import {blocksToCoin} from './Config'

class GetCoins extends Component {
  componentDidUpdate() {
    if (this.props.blocks >= blocksToCoin) {
      this.props.getCoin()
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
  }
})

const mapStateToProps = state => {
  return {
    blocks: state.blocks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetCoins)

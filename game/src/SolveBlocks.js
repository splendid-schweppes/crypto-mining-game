import { Component } from 'react'
import {connect} from 'react-redux'
import {sumBy} from 'lodash'

class SolveBlocks extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.solveBlock(this.props.hashingRate + this.props.hashingRateFromAssets)
    }, 1000)
  }

  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  solveBlock: count =>
    dispatch({
      type: 'SOLVE_BLOCK',
      count
    })
})

const mapStateToProps = state => {
  return {
    hashingRate: state.hashingRate,
    hashingRateFromAssets: sumBy(state.assets, 'hashingRate') + sumBy(state.powerUps, 'hashingRate'),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SolveBlocks)

import React, { Component } from 'react';
import {connect} from 'react-redux'

const blocksSolved = 0
const assets = 0

class SolveBlocks extends Component {
  componentDidMount() {
    console.log('this.props.hashingRate', this.props.hashingRate)
    console.log('this.props.blocks', this.props.blocks)

    setInterval(() => {
      this.props.solveBlock(this.props.hashingRate)
    }, 1000)
  }
  componentDidUpdate() {

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
    blocks: state.blocks,
    hashingRate: state.hashingRate
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SolveBlocks)

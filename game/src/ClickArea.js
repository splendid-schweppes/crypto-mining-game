import React, { Component } from 'react'
import {connect} from 'react-redux'
import {uniqueId} from 'lodash'

import './ClickArea.css'
import 'csshake/dist/csshake.css';

import coinSvg from './svg_assets/trollcoin.svg'

// const shakes = [
//   '',
//   'shake shake-little',
//   'shake shake',
//   'shake shake-slow',
//   'shake shake-hard',
//   'shake shake-crazy'
// ]

class ClickArea extends Component {
  render() {
    return (
      <img
        src={coinSvg}
        className="click-area"
        onClick={this.props.click}
        alt="click"
      />
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  click: event =>
    dispatch({
      type: 'CLICK',
      click: {
        id: uniqueId(),
        x: event.nativeEvent.clientX,
        y: event.nativeEvent.clientY,
        time: new Date()
      }
    })
})

export default connect(null, mapDispatchToProps)(ClickArea)

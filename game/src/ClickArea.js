import React, { Component } from 'react'
import {connect} from 'react-redux'
import {uniqueId, get, filter, last} from 'lodash'
import moment from 'moment'

import './ClickArea.css'
import 'csshake/dist/csshake.css';

import coinSvg from './svg_assets/trollcoin.svg'

const shakeThresholdTime = 3 * 1000
const shakeThresholdAmount = 5

const shakes = [
  '',
  'shake shake-little',
  'shake shake',
  'shake shake-slow',
  'shake shake-hard',
  'shake shake-crazy'
]

const getShake = shake => {
  if (shake > shakes.length) {
    return last(shakes)
  }

  return shakes[shake]
}

class ClickArea extends Component {
  render() {
    const shiiit = filter(this.props.clicks, click => moment().diff(click.time) < shakeThresholdTime)
    const shouldShake = shiiit.length >= shakeThresholdAmount
    const shake = Math.floor((shiiit.length / shakeThresholdAmount) % 10)

    const className = 'click-area ' + (shouldShake ? getShake(shake) : '')

    return (
      <img
        src={coinSvg}
        className={className}
        onClick={this.props.click}
        alt="click"
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    clicks: state.clicks.data
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

export default connect(mapStateToProps, mapDispatchToProps)(ClickArea)

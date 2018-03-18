import React, { Component } from 'react'
import {connect} from 'react-redux'

import './ClickArea.css'
import 'csshake/dist/csshake.css';

const shakes = [
  '',
  'shake shake-little',
  'shake shake',
  'shake shake-slow',
  'shake shake-hard',
  'shake shake-crazy'
]

class ClickArea extends Component {
  render() {
    return (
      <div className="click-area" onClick={this.props.click}>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  click: event => {
    console.log('dddd', event.nativeEvent)
    dispatch({
      type: 'CLICK',
      click: {x: event.nativeEvent.clientX, y: event.nativeEvent.clientY, time: new Date()}
    })
  }
})

export default connect(null, mapDispatchToProps)(ClickArea)

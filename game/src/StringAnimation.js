import React, { Component } from 'react'
import {times} from 'lodash'

import './StringAnimation.css'

const STRING_LENGTH = 16

export default class StringAnimation extends Component {
  constructor() {
    super()
    this.state = {
      text: '' // this.getText()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({text: times(STRING_LENGTH, this.getText).join('')})
    }, 1000/8)
  }

  getText() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  render() {
    return (
      <div className="string-animation">
        {this.state.text}
      </div>
    )
  }
}

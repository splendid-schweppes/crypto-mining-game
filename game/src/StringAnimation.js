import React, { Component } from 'react'
import {times} from 'lodash'

import './StringAnimation.css'
import laptopPng from './svg_assets/computer_screen.png'

const STRING_LENGTH = 19

export default class StringAnimation extends Component {
  constructor() {
    super()
    this.state = {
      text: this.getText()
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
        <img src={laptopPng} className="string-animation-image" alt="computer" />
        <div className="content">
          {this.state.text}
        </div>
      </div>
    )
  }
}

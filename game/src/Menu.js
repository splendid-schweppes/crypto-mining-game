import React, { Component } from 'react'
import './menu.css'
import Wallet from './Wallet'
import Shop from './Shop'
import Events from './Events'
import Achievements from './Achievements'

class Menu extends Component {
    constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="menu">
        <Wallet />
        <Shop />
        <Events />
        <Achievements />
      </div>
    )
  }
}

export default Menu

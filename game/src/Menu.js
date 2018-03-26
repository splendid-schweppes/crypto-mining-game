import React, { Component } from 'react'

import Wallet from './Wallet'
import Shop from './Shop'
import Powerups from './Powerups'
import Achievements from './Achievements'

import './Menu.css'

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Wallet />
        <Shop />
        <Powerups />
        <Achievements />
      </div>
    )
  }
}

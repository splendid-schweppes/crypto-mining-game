import React, { Component } from 'react'

import Market from './Market'
import Shop from './Shop'
import Powerups from './Powerups'
import Achievements from './Achievements'

import './Menu.css'

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Market />
        <Shop />
        <Powerups />
        <Achievements />
      </div>
    )
  }
}

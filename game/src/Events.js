import React, { Component } from 'react'
import './menu.css'
// import eventIcon from './svg_assets/trollcoin.svg'

class Events extends Component {
    constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="menu-item">
        <div>
          <h3>Events</h3>
          <i className="fa fa-calendar menu-icon"></i>
        </div>
      </div>
    )
  }
}

export default Events

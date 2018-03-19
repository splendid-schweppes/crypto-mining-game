import React, { Component } from 'react'
import './menu.css'

class Achievements extends Component {
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
          <h3>Achievements</h3>
          <i class="fa fa-trophy menu-icon"></i>
        </div>
      </div>
    )
  }
}

export default Achievements

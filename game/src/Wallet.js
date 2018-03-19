import React, { Component } from 'react'
import './menu.css'

class Wallet extends Component {
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
          <h3>Account Balance</h3>
          <p>20 Trollcoins <i class="fa fa-connectdevelop"></i></p>
          <p>400 $ <i class="fa fa-credit-card"></i></p>
        </div>
      </div>
    )
  }
}

export default Wallet

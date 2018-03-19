import React, { Component } from 'react'

export default class Wallet extends Component {
  render() {
    return (
      <div className="menu-item">
        <div>
          <h3>Account Balance</h3>
          <p>20 Trollcoins <i className="fa fa-connectdevelop"></i></p>
          <p>400 $ <i className="fa fa-credit-card"></i></p>
        </div>
      </div>
    )
  }
}

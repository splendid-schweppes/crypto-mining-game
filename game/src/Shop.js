import React, { Component } from 'react'
import './menu.css'

class Shop extends Component {
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
          <h3>Shop</h3>
          <i class="fa fa-shopping-cart menu-icon"></i>
        </div>
      </div>
    )
  }
}

export default Shop

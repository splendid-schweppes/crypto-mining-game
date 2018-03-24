import React, { Component } from 'react'
import ShopModal from './ShopModal'

export default class Shop extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen})
  }

  render() {
    return (
      <div>
        <div className="menu-item" onClick={this.toggleModal}>
          <div>
            <h3>Shop</h3>
            <i className="fa fa-4x fa-shopping-cart menu-icon"></i>
          </div>
        </div>
        <ShopModal modalIsOpen={this.state.modalIsOpen} closeModal={this.toggleModal}/>
      </div>
    )
  }
}

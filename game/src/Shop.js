import React, { Component } from 'react'
import ShopModal from './ShopModal'

export default class Shop extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div className="menu-item" onClick={this.openModal}>
          <div>
            <h3>Shop</h3>
            <i className="fa fa-4x fa-shopping-cart menu-icon"></i>
          </div>
        </div>
        <ShopModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
      </div>
    )
  }
}

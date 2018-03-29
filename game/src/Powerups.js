import React, { Component } from 'react'
import PowerupsModal from './PowerupsModal'

export default class Powerups extends Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: true
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
            <h3>Power Ups</h3>
            <i className="fa fa-4x fa-star-half-o menu-icon"></i>
          </div>
        </div>
        <PowerupsModal modalIsOpen={this.state.modalIsOpen} closeModal={this.toggleModal} />
      </div>
    )
  }
}

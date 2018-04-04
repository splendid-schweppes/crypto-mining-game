import React, { Component } from 'react'
import AchievementsModal from './AchievementsModal'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export default class Achievements extends Component {
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
            <h3>Achievements</h3>
            <i className="fa fa-4x fa-trophy menu-icon"></i>
          </div>
        </div>
        <AchievementsModal
          isOpen={this.state.modalIsOpen}
          closeModal={this.toggleModal}
        />
      </div>
    )
  }
}

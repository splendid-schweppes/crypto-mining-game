import React, { Component } from 'react'
import AchievementsModal from './AchievementsModal'
import Modal from 'react-modal'

Modal.setAppElement('#root');

export default class Achievements extends Component {
  constructor() {
    super()

    this.state = {
      isModalOpen: false,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({isModalOpen: true});
  }

  closeModal() {
    this.setState({isModalOpen: false});
  }

  render() {
    return (
      <div>
        <div className="menu-item" onClick={this.openModal}>
          <div>
            <h3>Achievements</h3>
            <i className="fa fa-4x fa-trophy menu-icon"></i>
          </div>
        </div>
        <AchievementsModal isOpen={this.state.isModalOpen} closeModal={this.closeModal}/>
      </div>
    )
  }
}

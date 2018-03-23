import React from 'react'
import Modal from 'react-modal'
// import { Grid, Row, Col } from 'react-flexbox-grid'

// import './ShopModal.css'

const customStyles = {
  content : {
    // top                   : '20%',
    // left                  : '50%',
    // right                 : 'auto',
    // bottom                : 'auto',
    // marginRight           : '-50%',
    // minWidth              : '800px',
    // transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#292929'
  }
}

Modal.setAppElement('#root')

export default class AchievementsModal extends React.Component {
  render() {
    return (
        <Modal isOpen={this.props.isOpen} style={customStyles}>
          <h2 className="centered">
            Achievements
          </h2>
          <button
            onClick={this.props.closeModal}
            className="modal-close-button"
          >
            close
          </button>
        </Modal>
    )
  }
}

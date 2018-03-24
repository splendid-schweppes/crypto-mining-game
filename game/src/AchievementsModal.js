import React from 'react'
import Modal from 'react-modal'
import { Grid, Row, Col } from 'react-flexbox-grid'

import './AchievementsModal.css'
import advisorCat from './svg_assets/cat1.png'

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
        <div className="modal-close-button" onClick={this.props.closeModal}>
          <span id="x">X</span>
        </div>

        <Grid fluid className="centered">
          <Row>
            <Col md={3} lg={3}>
            <img
              src={advisorCat}
              alt="advisorCat"
              className="advisorCat"
            />
            </Col>
            <Col md={6} lg={6}>
              <div className="talk-bubble tri-right left-top round">
                <div className="talktext">
                  <p>Welcome to your achievements! I shall be your fluffy advisor cat. 0 / 100 completed.</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col mdOffset={3} md={6}>
              <div className="achievement-item-box">
              <p className="achievement-text">1. Your first coin</p>
              <i className="fa fa-lock achievement-icon"></i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col mdOffset={3} md={6}>
              <div className="achievement-item-box">
              <p className="achievement-text">2. Ten coins</p>
              <i className="fa fa-lock achievement-icon"></i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col mdOffset={3} md={6}>
              <div className="achievement-item-box">
              <p className="achievement-text">3. First asset bought</p>
              <i className="fa fa-lock achievement-icon"></i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col mdOffset={3} md={6}>
              <div className="achievement-item-box">
              <p className="achievement-text">4. First PC bought</p>
              <i className="fa fa-lock achievement-icon"></i>
              </div>
            </Col>
          </Row>
        </Grid>
      </Modal>
    )
  }
}

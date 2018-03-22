import React from 'react'
import Modal from 'react-modal'
import { Grid, Row, Col } from 'react-flexbox-grid'

import computershoplogo from './svg_assets/computershoplogo.png'
import pc1 from './svg_assets/pc.svg'
import pc2 from './svg_assets/pc2.svg'
import pc3 from './svg_assets/pc3.svg'
import gpu1fan from './svg_assets/gpu1fan.svg'
import gpu2fan from './svg_assets/gpu2fan.svg'
import gpu3fan from './svg_assets/gpu3fan.svg'

import './ShopModal.css'

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

export default class ShopModal extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalIsOpen} style={customStyles}>
          <h2 className="centered">
            Welcome to the Hot Rod Computer store
          </h2>
          <p className="centered">
            We offer the finest selection of computers, components and of course a special price, just for you my friend!
          </p>
          <img
            src={computershoplogo}
            alt="computershoplogo"
            className="computershoplogo"
          />
          <button
            onClick={this.props.closeModal}
            className="modal-close-button"
          >
            close
          </button>

          <Grid fluid className="centered shop-grid">
            <Row>
              <Col md={4}>
                <div className="shop-item">
                  <strong>Basic PC</strong>
                  <p>The Oversoul</p>
                  <img src={pc1} alt="pc1" className="shop-item-icon-pc" />
                  <p><strong>400$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="shop-item">
                  <strong>Power PC</strong>
                  <p>Illustrated Primer</p>
                  <img src={pc2} alt="pc2" className="shop-item-icon-pc" />
                  <p><strong>800$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="shop-item">
                  <strong>Super PC</strong>
                  <p>The Quark 9000</p>
                  <img src={pc3} alt="pc3" className="shop-item-icon-pc" />
                  <p><strong>1200$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="shop-item">
                  <strong>Basic GPU</strong>
                  <p>Miniac</p>
                  <img src={gpu1fan} alt="gpu1fan" className="shop-item-icon-gpu1" />
                  <p><strong>200$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="shop-item">
                  <strong>Power GPU</strong>
                  <p>Teletraan</p>
                  <img src={gpu2fan} alt="gpu2fan" className="shop-item-icon-gpu2" />
                  <p><strong>400$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="shop-item">
                  <strong>Super GPU</strong>
                  <p>The Brain</p>
                  <img src={gpu3fan} alt="gpu3fan" className="shop-item-icon-gpu2" />
                  <p><strong>800$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
            </Row>
          </Grid>
        </Modal>
      </div>
    )
  }
}

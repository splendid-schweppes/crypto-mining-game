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
import motherboard from './svg_assets/motherboard.svg'
import motherboard2 from './svg_assets/motherboard2.svg'
import motherboard3 from './svg_assets/motherboard3.svg'
import powersupply from './svg_assets/powersupply.svg'
import powersupply2 from './svg_assets/powersupply2.svg'
import powersupply3 from './svg_assets/powersupply3.svg'

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
                  <div className="shop-item-heading">
                  <strong>Basic PC</strong>
                  <p className="item-details">The Oversoul</p>
                  </div>
                  <p className="item-details">Hashing Rate: <span className="shop-highlight">0.01</span></p>
                  <p className="item-details">Electricity Cost: <span className="shop-highlight">1400 w</span></p>
                  <img src={pc1} alt="pc1" className="shop-item-icon-pc" />
                  <p><strong>1200$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="shop-item">
                <div className="shop-item-heading">
                  <strong>Power PC</strong>
                  <p className="item-details">Illustrated Primer</p>
                </div>
                  <p className="item-details">Hashing Rate: <span className="shop-highlight">0.02</span></p>
                  <p className="item-details">Electricity Cost: <span className="shop-highlight">2400 w</span></p>
                  <img src={pc2} alt="pc2" className="shop-item-icon-pc" />
                  <p><strong>1800$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="shop-item">
                <div className="shop-item-heading">
                  <strong>Super PC</strong>
                  <p className="item-details">The Quark 9000</p>
                </div>
                  <p className="item-details">Hashing Rate: <span className="shop-highlight">0.03</span></p>
                  <p className="item-details">Electricity Cost: <span className="shop-highlight">3400 w</span></p>
                  <img src={pc3} alt="pc3" className="shop-item-icon-pc" />
                  <p><strong>2200$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="shop-item">
                <div className="shop-item-heading">
                  <strong>Basic GPU</strong>
                  <p className="item-details">Miniac</p>
                </div>
                  <p className="item-details">Hashing Rate: <span className="shop-highlight">0.004</span></p>
                  <p className="item-details">Electricity Cost: <span className="shop-highlight">300 w</span></p>
                  <img src={gpu1fan} alt="gpu1fan" className="shop-item-icon-general" />
                  <p><strong>400$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="shop-item">
                <div className="shop-item-heading">
                  <strong>Power GPU</strong>
                  <p className="item-details">Teletraan</p>
                </div>
                  <p className="item-details">Hashing Rate: <span className="shop-highlight">0.006</span></p>
                  <p className="item-details">Electricity Cost: <span className="shop-highlight">400 w</span></p>
                  <img src={gpu2fan} alt="gpu2fan" className="shop-item-icon-gpu2" />
                  <p><strong>600$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="shop-item">
                <div className="shop-item-heading">
                  <strong>Super GPU</strong>
                  <p className="item-details">The Brain</p>
                </div>
                  <p className="item-details">Hashing Rate: <span className="shop-highlight">0.008</span></p>
                  <p className="item-details">Electricity Cost: <span className="shop-highlight">500 w</span></p>
                  <img src={gpu3fan} alt="gpu3fan" className="shop-item-icon-gpu2" />
                  <p><strong>800$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="shop-item">
                <div className="shop-item-heading">
                  <strong>Basic Motherboard</strong>
                  <p className="item-details">Upoc</p>
                </div>
                  <p className="item-details">Hashing Rate: <span className="shop-highlight">0.001</span></p>
                  <p className="item-details">Electricity Cost: <span className="shop-highlight">50 w</span></p>
                  <img src={motherboard} alt="motherboard" className="shop-item-icon-general"/>
                  <p><strong>100$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
              <Col md={4}>
              <div className="shop-item">
              <div className="shop-item-heading">
                <strong>Power Motherboard</strong>
                <p className="item-details">Distilling X5</p>
              </div>
                <p className="item-details">Hashing Rate: <span className="shop-highlight">0.002</span></p>
                <p className="item-details">Electricity Cost: <span className="shop-highlight">100 w</span></p>
                <img src={motherboard2} alt="motherboard2" className="shop-item-icon-general"/>
                <p><strong>200$</strong></p>
                <button className="buy-item-button">Buy</button>
              </div>
              </Col>
              <Col md={4}>
                <div className="shop-item">
                <div className="shop-item-heading">
                  <strong>Super Motherboard</strong>
                  <p className="item-details">Dypado 500</p>
                </div>
                  <p className="item-details">Hashing Rate: <span className="shop-highlight">0.003</span></p>
                  <p className="item-details">Electricity Cost: <span className="shop-highlight">200 w</span></p>
                  <img src={motherboard3} alt="motherboard3" className="shop-item-icon-general"/>
                  <p><strong>300$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="shop-item">
                <div className="shop-item-heading">
                  <strong>Basic Powersupply</strong>
                  <p className="item-details">Trixter</p>
                </div>
                  <p className="item-details">Electricity: <span className="shop-highlight">400 w</span></p>
                  <img src={powersupply} alt="powersupply1" className="shop-item-icon-general"/>
                  <p><strong>200$</strong></p>
                  <button className="buy-item-button">Buy</button>
                </div>
              </Col>
              <Col md={4}>
              <div className="shop-item">
              <div className="shop-item-heading">
                <strong>Power Powersupply</strong>
                <p className="item-details">The Nuclear Plant</p>
              </div>
                <p className="item-details">Electricity: <span className="shop-highlight">800 w</span></p>
                <img src={powersupply2} alt="powersupply2" className="shop-item-icon-general"/>
                <p><strong>400$</strong></p>
                <button className="buy-item-button">Buy</button>
              </div>
              </Col>
              <Col md={4}>
                <div className="shop-item">
                <div className="shop-item-heading">
                  <strong>Super Powersupply</strong>
                  <p className="item-details">Solar</p>
                </div>
                  <p className="item-details">Electricity: <span className="shop-highlight">1400 w</span></p>
                  <img src={powersupply3} alt="powersupply3" className="shop-item-icon-general"/>
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

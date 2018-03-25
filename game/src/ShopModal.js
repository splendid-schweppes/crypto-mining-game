import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'

import computershoplogo from './svg_assets/computershoplogo.png'
import pc1 from './svg_assets/pc.svg'
import pc2 from './svg_assets/pc2.svg'
import pc3 from './svg_assets/pc3.svg'
import gpu1fan from './svg_assets/gpu1fan.svg'
import gpu2fan from './svg_assets/gpu2fan.svg'
import gpu3fan from './svg_assets/gpu3fan.svg'
import motherboard1 from './svg_assets/motherboard.svg'
import motherboard2 from './svg_assets/motherboard2.svg'
import motherboard3 from './svg_assets/motherboard3.svg'
import powersupply1 from './svg_assets/powersupply.svg'
import powersupply2 from './svg_assets/powersupply2.svg'
import powersupply3 from './svg_assets/powersupply3.svg'

import './ShopModal.css'

const customStyles = {
  content : {
    // top: '20%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // minWidth: '800px',
    // transform: 'translate(-50%, -50%)',
    backgroundColor: '#292929'
  }
}

Modal.setAppElement('#root')


const assets = [
  {title: 'Basic PC', details: 'The Oversoul', hashingRate: 0.01, electricityCost: 1400, price: 1200, img: pc1},
  {title: 'Power PC', details: 'Illustrated Primer', hashingRate: 0.02, electricityCost: 2400, price: 1800, img: pc2},
  {title: 'Super PC', details: 'The Quark 9000', hashingRate: 0.03, electricityCost: 3400, price: 2200, img: pc3},

  {title: 'Basic GPU', details: 'Miniac', hashingRate: 0.004, electricityCost: 300, price: 400, img: gpu1fan},
  {title: 'Power GPU', details: 'Teletraan', hashingRate: 0.006, electricityCost: 400, price: 600, img: gpu2fan},
  {title: 'Super GPU', details: 'Illustrated', hashingRate: 0.008, electricityCost: 500, price: 800, img: gpu3fan},

  {title: 'Basic Motherboard', details: 'Upoc', hashingRate: 0.001, electricityCost: 50, price: 100, img: motherboard1},
  {title: 'Power Motherboard', details: 'Distilling X5', hashingRate: 0.002, electricityCost: 100, price: 200, img: motherboard2},
  {title: 'Super Motherboard', details: 'Dypado 500', hashingRate: 0.003, electricityCost: 200, price: 300, img: motherboard3},

  {title: 'Basic Powersupply', details: 'Trixter', hashingRate: 0, electricityCost: 400, price: 200, img: powersupply1},
  {title: 'Power Powersupply', details: 'The Nuclear Plant', hashingRate: 0, electricityCost: 800, price: 400, img: powersupply2},
  {title: 'Super Powersupply', details: 'Solar', hashingRate: 0, electricityCost: 1400, price: 800, img: powersupply3},
]

const renderAsset = (asset) => {
  return (
    <Col md={4} key={asset.title}>
      <div className="shop-item">
        <div className="shop-item-heading">
          <strong>{asset.title}</strong>
          <p className="item-details">{asset.details}</p>
        </div>
        {asset.hashingRate > 0 &&
          <p className="item-details">
            Hashing Rate: <span className="shop-highlight">{asset.hashingRate}</span>
          </p>
        }
        <p className="item-details">
          Electricity Cost: <span className="shop-highlight">{asset.electricityCost} w</span>
        </p>
        <img src={asset.img} alt="pc1" className="shop-item-icon-pc" />
        <p>
          <strong>${asset.price}</strong>
        </p>
        <button className="buy-item-button">
          Buy
        </button>
      </div>
    </Col>
  )
}

class ShopModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: props.coins
    }

    this.changeCoinCount = this.changeCoinCount.bind(this)
    this.sell = this.sell.bind(this)
  }

  changeCoinCount({target}) {
    console.log(target.value)

    if (target.value <= this.props.coins) {
      this.setState({coins: target.value})
    }
  }

  sell() {
    this.props.sell(this.state.coins)
    this.setState({coins: this.props.coins - this.state.coins})
  }

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

          <div className="modal-close-button" onClick={this.props.closeModal}>
            <span id="x">X</span>
          </div>


          Sell coins: todo set state
          <input type="number" value={this.state.coins} onChange={this.changeCoinCount} />
          <button onClick={this.sell}>Sell</button>

          <Grid fluid className="centered shop-grid">
            <Row>
              {assets.map(renderAsset)}
            </Row>
          </Grid>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  sell: count => {
    dispatch({type: 'SELL_COINS', count})
    dispatch({type: 'REMOVE_COINS', count})
  }
})

const mapStateToProps = state => {
  return {
    coins: state.coins,
    assets: 0,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopModal)

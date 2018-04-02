import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {shop_price_up, shop_hashingRate_up} from './Config'

import computershoplogo from './svg_assets/computershoplogo.png'

import {loadElectricity, saveElectricity} from './Util'
import {loadShopAssets, saveShopAssets} from './Util'

import './ShopModal.css'
import sellerCat from './svg_assets/cat2.png'

const customStyles = {
  content : {
    backgroundColor: '#292929'
  }
}

Modal.setAppElement('#root')

const assets = loadShopAssets()

const sellerCatText = [
  {heading: 'Welcome to the KittyCat PC Store!', text: 'We offer the finest selection of computers, components and of course a special price, just for you my friend!'},
  {heading: 'Super deals today!', text: 'Today we have extra fine computer equipment for sale. If you have any questions, I will not answer!'},
  {heading: 'Oh it\'s you, welcome!', text: 'I hope you find something suitable for what ever you are doing.'},
  {heading: 'Hello stranger!', text: 'My shop has been here for a decade and we always try to find the latest tech and stuff for our customers to enjoy.'},
  {heading: 'Looking for something?', text: 'I might have a couple of special items just for your needs, please have a look at my inventory.'}
]

class ShopModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: props.coins,
      sellerCatText: Math.floor(Math.random() * sellerCatText.length),
      electricity: loadElectricity()
    }
    this.renderAsset = this.renderAsset.bind(this)
    this.buyAsset = this.buyAsset.bind(this)
    this.renderCatText = this.renderCatText.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.sellerCatText === sellerCatText.length - 1) {
        this.setState({ sellerCatText: 0 });
      } else {
        this.setState({ sellerCatText: this.state.sellerCatText + 1 });
      }
    }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  buyAsset(asset) {
    return () => {
      if (this.props.money > 0 && this.props.money >= asset.price) {
        if (asset.type === 'power') {
          const electricity = this.state.electricity + asset.electricity;
          this.setState({electricity});
          this.props.buyAsset(asset);
          saveElectricity(electricity);
          asset.price = asset.price * shop_price_up;
          asset.hashingRate = asset.hashingRate * shop_hashingRate_up;
          saveShopAssets(assets);
        } else if ((this.state.electricity - asset.electricity) >= 0) {
          const electricity = this.state.electricity - asset.electricity;
          this.setState({electricity});
          this.props.buyAsset(asset);
          saveElectricity(electricity);
          asset.price = asset.price * shop_price_up;
          asset.hashingRate = asset.hashingRate * shop_hashingRate_up;
          saveShopAssets(assets);
        }
      }
    }
  }

  renderCatText() {
    return (
      <div className="talktext">
        <h2>
          {sellerCatText[this.state.sellerCatText].heading}
        </h2>
        <p>
          {sellerCatText[this.state.sellerCatText].text}
        </p>
        </div>
      )
  }

  renderAsset(asset) {
    return (
      <Col md={4} key={asset.title}>
        <div className="shop-item">
          <div className="shop-item-heading">
            <strong>{asset.title}</strong>
            <p className="item-details">{asset.details}</p>
          </div>
          {asset.hashingRate > 0 &&
            <p className="item-details">
              Hashing Rate: <span className="shop-highlight">{asset.hashingRate.toFixed(3)}</span>
            </p>
          }
          <p className="item-details">
            {asset.type === 'power' ? 'Electricity' : 'Electricity Cost'}: <span className="shop-highlight">{asset.electricity} w</span>
          </p>
          <img src={asset.img} alt={asset.title} className="shop-item-icon-pc" />
          <p>
            <strong>${asset.price.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</strong>
          </p>
          <button className="buy-item-button" onClick={this.buyAsset(asset)}>
            Buy
          </button>
        </div>
      </Col>
    )
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalIsOpen} style={customStyles}>
          <h2 className="centered">
            KittyCat PC STORE
          </h2>
          <img
            src={computershoplogo}
            alt="computershoplogo"
            className="computershoplogo img-responsive"
          />

          <div className="modal-close-button" onClick={this.props.closeModal}>
            <span id="x">X</span>
          </div>

          <Grid fluid className="shop-grid">
            <Row>
              <Col md={3} lg={3}>
                <div className="player-electricity">
                  <strong>{this.state.electricity}</strong>
                  <i className="fa fa-bolt status-icons" aria-hidden="true"></i>
                </div>
                <div className="player-wallet">
                  <strong>{this.props.money.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</strong>
                  <i className="fa fa-usd status-icons" aria-hidden="true"></i>
                </div>
                <div className="player-level">
                  <strong>{this.props.achievements.length} / 20</strong>
                  <i className="fa fa-level-up status-icons" aria-hidden="true"></i>
                </div>
              </Col>
              <Col md={6} lg={6}>
                <div className="talk-bubble-shop tri-left left-top round">
                  {this.renderCatText()}
                </div>
              </Col>
              <Col md={3} lg={3}>
                <img
                  src={sellerCat}
                  alt="sellerCat"
                  className="sellerCat img-responsive"
                />
              </Col>
            </Row>
            <Row className="centered">
              {assets.map(this.renderAsset)}
            </Row>
          </Grid>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  sellCoins: count => {
    dispatch({type: 'SELL_COINS', count})
    dispatch({type: 'REMOVE_COINS', count})
  },
  buyAsset: asset => {
    dispatch({type: 'ADD_ASSET', asset})
    dispatch({type: 'REMOVE_MONEY', amount: asset.price})
    dispatch({type: 'ACHIEVEMENT_FIRST_ASSET'})

    if (asset.type === 'pc') {
      dispatch({type: 'ACHIEVEMENT_FIRST_COMPUTER'})
    }
  }
})

const mapStateToProps = state => {
  return {
    coins: state.coins,
    money: state.money,
    assets: state.assets,
    electricity: state.electricity,
    achievements: state.achievements
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopModal)

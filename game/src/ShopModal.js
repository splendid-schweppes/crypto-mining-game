import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-flexbox-grid'
import {ToastContainer, toast} from 'react-toastify'
import {sample} from 'lodash'

import {shopAssets} from './shopAssets'
import {shop_price_up, shop_hashingRate_up, shop_electricity_up} from './Config'

import './ShopModal.css'
import sellerCat from './svg_assets/cat2.png'

const customStyles = {
  content: {
    backgroundColor: '#292929'
  }
}

Modal.setAppElement('#root')


const assets = shopAssets

const sellerCatTexts = [
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
      sellerCatText: sample(sellerCatTexts),
      electricity: props.electricity,
      assets
    }

    this.renderAsset = this.renderAsset.bind(this)
    this.buyAsset = this.buyAsset.bind(this)
    this.renderCatText = this.renderCatText.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({sellerCatText: sample(sellerCatTexts)})
    }, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  boughtNotification = () => toast.success('Asset purchased!')
  noMoneyNotification = () => toast.error('Not enough money!')
  noElectricityNotification = () => toast.warning('Not enough electricity available!')

  buyAsset(asset) {
    return () => {
      let doshit = false
      let electricity = 0
      if (this.props.money > 0 && this.props.money >= asset.price) {
        if (asset.type === 'power') {
          electricity = this.props.electricity + asset.electricity
          doshit = true
        } else if (this.props.electricity - asset.electricity >= 0) {
          electricity = this.props.electricity - asset.electricity
          doshit = true
        } else {
          this.noElectricityNotification()
        }
      } else {
        this.noMoneyNotification()
      }

      if (doshit) {
        // this.setState({electricity})
        this.props.buyAsset(asset)

        this.props.addElectricity(electricity)



        // TODO: edit to state
        // TODO: separate into their own method
        // asset.price = asset.price * shop_price_up
        // asset.hashingRate = asset.hashingRate * shop_hashingRate_up
        // asset.lvl = asset.lvl + 1
        // asset.electricity = asset.electricity * shop_electricity_up

        // TODO: do this with redux
        // saveShopAssets(assets)


        this.boughtNotification()
      }
    }
  }

  renderCatText() {
    return (
      <div className="talktext">
        <h2>
          {this.state.sellerCatText.heading}
        </h2>
        <p>
          {this.state.sellerCatText.text}
        </p>
      </div>
    )
  }

  renderAsset(asset) {
    const electricityCost = asset.type === 'power' ? 'Electricity' : 'Electricity Cost'
    return (
      <Col md={4} key={asset.title}>
        <div className="shop-item">
          <div className="shop-item-heading">
            <strong>{asset.title} / <span className="shop-highlight">Level {asset.lvl}</span></strong>
            <p className="item-details">{asset.details}</p>
          </div>
          {asset.hashingRate > 0 &&
            <p className="item-details">
              Hashing Rate: <span className="shop-highlight">{asset.hashingRate.toFixed(3)}</span>
            </p>
          }
          <p className="item-details">
            {electricityCost}: <span className="shop-highlight">{asset.electricity.toFixed(0)} w</span>
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

          <div className="modal-close-button" onClick={this.props.closeModal}>
            <span id="x">X</span>
          </div>

          <Grid fluid className="shop-grid">
            <Row>
              <div className="player-stats-container">
                <div className="player-electricity player-shop-stats">
                  <strong>{this.props.electricity.toFixed(0)}</strong>
                  <i className="fa fa-bolt status-icons" aria-hidden="true"></i>
                </div>
                <div className="player-wallet player-shop-stats">
                  <strong>{this.props.money.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</strong>
                  <i className="fa fa-usd status-icons" aria-hidden="true"></i>
                </div>
                <div className="player-level player-shop-stats">
                  <strong>{this.props.achievements.length} / 20</strong>
                  <i className="fa fa-level-up status-icons" aria-hidden="true"></i>
                </div>
              </div>
              <Col mdOffset={4} md={5}>
                <div className="talk-bubble-shop tri-left left-top round">
                  {this.renderCatText()}
                </div>
              </Col>
              <Col md={3}>
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
          <ToastContainer autoClose={2000} position="bottom-right"/>
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
  },
  addElectricity: electricity => {
    dispatch({type: 'ADD_ELECTRICITY', electricity})
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

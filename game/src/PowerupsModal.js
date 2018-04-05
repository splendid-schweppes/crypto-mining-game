import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-flexbox-grid'
import {ToastContainer, toast} from 'react-toastify'
import {sample, map, extend} from 'lodash'

import {shop_price_up, shop_hashingRate_up, shop_electricity_up} from './Config'

import './ShopModal.css'
import './PowerupsModal.css'
import grumpyCat from './svg_assets/grumpycat.png'

const customStyles = {
  content: {
    backgroundColor: '#292929'
  }
}

Modal.setAppElement('#root')

const sellerCatTexts = [
  {heading: 'Looking for power ups?', text: 'I would piss on you if you were on fire. If I could piss gasoline.'},
  {heading: 'I only hate days that begin', text: '....'},
  {heading: 'You have to get some achievements to buy my power ups', text: 'By the way, I only like people that don\'t breathe.'},
  {heading: 'God wasted a good asshole', text: 'When he put teeth in your mouth!'},
  {heading: 'They said post a selfie', text: 'So I posted one of my middle finger.'}
]

class PowerupsModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sellerCatText: sample(sellerCatTexts),
      electricity: props.electricity,
      powerUps: props.powerUps
    }

    this.renderPowerup = this.renderPowerup.bind(this)
    this.buyPowerUp = this.buyPowerUp.bind(this)
    this.renderCatText = this.renderCatText.bind(this)
  }

  unlockpowerUps() {
    this.setState({powerUps:
      map(this.state.powerUps, asset =>
        extend({}, asset, {locked: this.props.achievements.length < asset.unlocklvl})
      )
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({sellerCatText: sample(sellerCatTexts)})
    }, 10000)

    this.unlockpowerUps()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  boughtNotification = () => toast.success('Asset purchased!')
  noMoneyNotification = () => toast.error('Not enough money!')
  noElectricityNotification = () => toast.error('Not enough electricity available!')
  itemLockedNotification = () => toast.warning('Item is locked!')
  assetMaxeddNotification = () => toast.error('PowerUp on maximum level!')

  buyPowerUp(asset) {
    return () => {
      let doshit = false
      let electricity = 0
      if (asset.locked) {
        this.itemLockedNotification()
      } else if (asset.lvl === asset.maxlvl) {
        this.assetMaxeddNotification()
      } else if (this.props.money > 0 && this.props.money >= asset.price) {
        if (asset.type === 'addPower') {
          electricity = this.state.electricity + asset.electricity
          doshit = true
        } else if (this.state.electricity - asset.electricity >= 0) {
          electricity = this.state.electricity - asset.electricity // miksi sähköä vähennetään statesta?
          doshit = true
        } else {
          this.noElectricityNotification()
        }
      } else {
        this.noMoneyNotification()
      }

      if (doshit) {
        this.setState({electricity})
        this.props.buyPowerUp(asset)

        this.props.addElectricity(electricity)


        // TODO: edit to state
        // TODO: separate into their own method
        // asset.price = asset.price * shop_price_up
        // asset.hashingRate = asset.hashingRate * shop_hashingRate_up
        // asset.lvl = asset.lvl + 1
        // asset.electricity = asset.electricity * shop_electricity_up

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

  renderPowerup(asset, index) {
    const itemLockedStyle = `${asset.locked ? 'locked' : 'unlocked'}`
    const itemLockedText = `${asset.locked ? 'locked-text' : 'unlocked-text'}`
    const electricityText = asset.type === 'addPower' ? 'Electricity added' : 'Electricity Cost'
    const assetLevel = asset.lvl === asset.maxlvl ? 'Maximum level' : `Level ${asset.lvl}`

    return (
      <Col md={4} key={asset.title}>
        <div className="powerup-item">
          <div className={itemLockedText}>Unlock at LVL {2 * index + 2}</div>
          <div className={itemLockedStyle}>
            <div className="powerup-item-heading">
              <strong>{asset.title}</strong>
              <p className="shop-highlight">{assetLevel}</p>
              <p className="item-details">{asset.details}</p>
            </div>
            <p className="item-details">
              Hashing Rate: <span className="shop-highlight">{asset.hashingRate.toFixed(3)}</span>
            </p>
            <p className="item-details">
              {electricityText}: <span className="shop-highlight">{asset.electricity.toFixed(0)} w</span>
            </p>
            <img src={asset.img} alt={asset.title} className="img-responsive powerup-icon" />
            <p>
              <strong>${asset.price.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</strong>
            </p>
            <button className="buy-item-button" onClick={this.buyPowerUp(asset)}>
              Buy
            </button>
          </div>
        </div>
      </Col>
    )
  }

  render() {
    return (
      <div>
      <h1 style={{color: '#fff', fontSize: '20rem'}}>Korjaa powerupsit</h1>
        <Modal isOpen={this.props.modalIsOpen} style={customStyles}>
          <h2 className="centered">
            Grumpy Cat's Power Ups
          </h2>

          <div className="modal-close-button" onClick={this.props.closeModal}>
            <span id="x">X</span>
          </div>

          <Grid fluid className="shop-grid">
            <Row>
              <div className="player-stats-container">
                <div className="player-electricity player-shop-stats">
                  <strong>{this.state.electricity.toFixed(0)}</strong>
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
              <Col md={3} lg={3}>
                <img
                  src={grumpyCat}
                  alt="grumpyCat"
                  className="sellerCat img-responsive"
                />
              </Col>
            </Row>
            <Row className="centered">
              {this.state.powerUps.map(this.renderPowerup)}
            </Row>
          </Grid>
          <ToastContainer autoClose={2000} position="bottom-right"/>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  buyPowerUp: powerUp => {
    dispatch({type: 'ADD_POWERUP', powerUp})
    dispatch({type: 'REMOVE_MONEY', amount: powerUp.price})
  },
  addElectricity: electricity => {
    dispatch({type: 'ADD_ELECTRICITY', electricity})
  }
})

const mapStateToProps = state => {
  return {
    money: state.money,
    powerUps: state.powerUps, // tämä lataa vaan omistetut powerupsit, mistä saadaan kaikki powerupsit?
    electricity: state.electricity,
    achievements: state.achievements
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PowerupsModal)

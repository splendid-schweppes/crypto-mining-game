import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'

import './ShopModal.css'
import './PowerupsModal.css'
import grumpyCat from './svg_assets/grumpycat.png'
import comingSoon from './svg_assets/coming-soon.png'
import hamster from './svg_assets/hamster.png'
import spacerocket from './svg_assets/spacerocket.png'
import chinese from './svg_assets/chinese.png'
import overclock from './svg_assets/overclock.png'
import penguin from './svg_assets/penguin.png'
import clouddata from './svg_assets/clouddata.png'
import russian from './svg_assets/russian.png'
import power from './svg_assets/power.png'
import overclock2 from './svg_assets/overclock2.png'

const customStyles = {
  content : {
    backgroundColor: '#292929'
  }
}

Modal.setAppElement('#root')

const assets = [
  {type: 'addPower', title: 'Hamster on spinning wheel', details: 'Hamster farm to boost your electricity', hashingRate: 0, electricityCost: 10000, price: 2500, img: hamster, locked: true},
  {type: 'powerup', title: 'Chinese hackers', details: 'Hire chinese hackers to hash faster', hashingRate: 0.1, electricityCost: 0, price: 8000, img: chinese, locked: true},
  {type: 'powerup', title: 'Overclock lvl 1', details: 'Overclock to boost your hashing by 0.3', hashingRate: 0.3, electricityCost: 10000, price: 0, img: overclock, locked: true},

  {type: 'addPower', title: 'Electricity boost', details: '20 000 electricity for lifetime', hashingRate: 0.00, electricityCost: 20000, price: 5000, img: power, locked: true},
  {type: 'powerup', title: 'Overclock lvl 2', details: 'Double your hashing rate', hashingRate: 0.5, electricityCost: 20000, price: 0, img: overclock2, locked: true},
  {type: 'powerup', title: 'Cloud hashing', details: 'Cloud datacenter for lifetime hashing', hashingRate: 0.9, electricityCost: 0, price: 20000, img: clouddata, locked: true},

  {type: 'powerup', title: 'Russian datacenter', details: 'Russian datacenter for hashing Putin fast', hashingRate: 2, electricityCost: 0, price: 40000, img: russian, locked: true},
  {type: 'powerup', title: 'Stuxnet computer virus', details: 'Spread Stuxnet virus to hash on infected pc', hashingRate: 3, electricityCost: 0, price: 70000, img: penguin, locked: true},
  {type: 'powerup', title: 'To The Moon!', details: 'Steal Nasa blueprints to build a space rocket', hashingRate: 8, electricityCost: 40000, price: 100000, img: spacerocket, locked: true},
]

const sellerCatText = [
  {heading: 'Looking for power ups?', text: 'I would piss on you if you were on fire. If I could piss gasoline.'},
  {heading: 'I only hate days that begin', text: '....'},
  {heading: 'You have to get some achievements to buy my power ups', text: 'By the way, I only like people that don\'t breathe.'},
  {heading: 'God wasted a good asshole', text: 'When he put teeth in your mouth!'},
  {heading: 'They said post a selfie', text: 'So I posted one of my middle finger.'}
]

// incorrect classname
class ShopModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: props.coins,
      sellerCatText: Math.floor(Math.random() * sellerCatText.length)
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
        this.props.buyAsset(asset)
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
    const itemLockedStyle = `powerup-item ${asset.locked ? 'locked' : 'unlocked'}`
    return (
      <Col md={4} key={asset.title}>
        <div className={itemLockedStyle}>
          <div className="powerup-item-heading">
            <strong>{asset.title}</strong>
            <p className="item-details">{asset.details}</p>
          </div>
          <p className="item-details">
            Hashing Rate: <span className="shop-highlight">{asset.hashingRate}</span>
          </p>
          <p className="item-details">
            {asset.type === 'addPower' ? 'Electricity added' : 'Electricity Cost'}: <span className="shop-highlight">{asset.electricityCost.toLocaleString()} w</span>
          </p>
          <img src={asset.img} alt={asset.title} className="img-responsive powerup-icon" />
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
            Power Ups
          </h2>

          <div className="modal-close-button" onClick={this.props.closeModal}>
            <span id="x">X</span>
          </div>

          <Grid fluid className="shop-grid">
            <Row>
              <Col md={3} lg={3}>
                <div className="player-electricity">
                  <strong>0</strong>
                  <i className="fa fa-battery-three-quarters status-icons" aria-hidden="true"></i>
                </div>
                <div className="player-wallet">
                  <strong>{this.props.money.toFixed(2)}</strong>
                  <i className="fa fa-usd status-icons" aria-hidden="true"></i>
                </div>
                <div className="player-level">
                  <strong>0 / 20</strong>
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
                  src={grumpyCat}
                  alt="grumpyCat"
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
  // ?????????
  sellCoins: count => {
    dispatch({type: 'SELL_COINS', count})
    dispatch({type: 'REMOVE_COINS', count})
  },

  // ?????????
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
    assets: state.assets
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopModal)

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-flexbox-grid'
import {find, sample} from 'lodash'
import Modal from 'react-modal'

import {modal_styles} from './Config'

import './AchievementsModal.css'
import advisorCat from './svg_assets/cat1.png'

Modal.setAppElement('#root')

const achievements = [
  {id: 1, name: 'Your first coin'},
  {id: 2, name: 'Ten coins hashed'},
  {id: 3, name: 'First asset bought'},
  {id: 4, name: 'First PC bought'},
  {id: 5, name: 'Fifty coins hashed'},
  {id: 6, name: '10 computers bought'},
  {id: 7, name: '10 GPU\'s bought'},
  {id: 8, name: '10 Motherboards bought'},
  {id: 9, name: '10 Power supplies bought'},
  {id: 10, name: '100 Coins hashed'},
  {id: 11, name: 'To the moon! 1000 coins hashed'},
  {id: 12, name: 'Home Data Center owner, 50 assets bought'},
  {id: 13, name: 'Cloud Data Center owner, 100 assets'},
  {id: 14, name: 'Crypto hustler, 100 coins hashed'},
  {id: 15, name: 'Crypto king, 1000 coins hashed'},
  {id: 16, name: 'First coin sold'},
  {id: 17, name: 'Crypto dealer, 10 coins sold'},
  {id: 17, name: 'Boss dealer, 100 coins sold'},
  {id: 18, name: 'Hidden ComboBreaker HIT!'},
  {id: 19, name: 'Young money, cash money. Wallet contains 100 000 $'},
  {id: 20, name: 'You did it! 1 000 000 coins hashed. This is the end game. Nice job.'}
]

const achievementCatTexts = [
  {heading: 'Whats up!', text: 'My name is Pertti, the advisor cat. I shall guide you towards the game goal. GET ALL THE COINS AND TO THE MOON!'},
  {heading: 'Hurrr a Purrr', text: 'Cattastic day for you! Looks like there are couple of achievements to do.'},
  {heading: 'Meaow', text: 'I am not helping much? Am I? Well, it\'s not my fault if you cant click any faster.'},
  {heading: 'My ball of wool is!....', text: 'Oh sorry, I didn\'t pay attention. Get clicking you lazy player!'},
  {heading: 'What should we do today?', text: 'Maybe you should click faster to get more assets from the KittyCat PC store?'}
]

class AchievementsModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      achievementCatText: sample(achievementCatTexts)
    }
    this.renderAchievement = this.renderAchievement.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({achievementCatText: sample(achievementCatTexts)})
    }, 10000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderCatText() {
    return (
      <div className="talktext">
        <h2>
          {this.state.achievementCatText.heading}
        </h2>
        <p>
          {this.state.achievementCatText.text}
        </p>
      </div>
    )
  }

  renderAchievement(achievement) {
    const achievementEarned = find(this.props.achievements, {id: achievement.id})

    const className = 'fa achievement-icon' +
      (!achievementEarned ? ' fa-lock' : '') +
      (achievementEarned ? ' fa-unlock unlock-icon' : '')

    const achievementItemBox = 'achievement-item-box' +
      (achievementEarned ? ' unlocked-item' : '')

    return (
      <Row key={achievement.name}>
        <Col md={12}>
          <div className={achievementItemBox}>
            <p className="achievement-text"><strong>{achievement.id}. </strong>{achievement.name}</p>
            <i className={className}></i>
          </div>
        </Col>
      </Row>
    )
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} style={modal_styles}>
        <h2 className="centered">
          Achievements
        </h2>
        <div className="modal-close-button" onClick={this.props.closeModal}>
          <span id="x">X</span>
        </div>

        <Grid fluid>
          <Row>
            <Col md={3} lg={3} className="centered">
            <img
              src={advisorCat}
              alt="advisorCat"
              className="advisorCat img-responsive"
            />
            </Col>
            <Col md={6} lg={6}>
              <div className="talk-bubble tri-right left-top round">
                {this.renderCatText()}
              </div>
            </Col>
            <Col md={3}>
              <div className="player-level margin-t-20">
                <strong>{this.props.achievements.length} / 20</strong>
                <i className="fa fa-level-up status-icons" aria-hidden="true"></i>
              </div>
            </Col>
          </Row>
          {achievements.map(this.renderAchievement)}
        </Grid>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    achievements: state.achievements
  }
}

export default connect(mapStateToProps)(AchievementsModal)

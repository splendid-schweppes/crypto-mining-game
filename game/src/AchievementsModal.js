import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-flexbox-grid'
import {find} from 'lodash'

import './AchievementsModal.css'
import advisorCat from './svg_assets/cat1.png'

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

const achievements = [
  {id: 1, name: 'Your first coin', locked: true},
  {id: 2, name: 'Ten coins hashed', locked: true},
  {id: 3, name: 'First asset bought', locked: true},
  {id: 4, name: 'First PC bought', locked: true},
  {id: 5, name: 'Fifty coins hashed', locked: true},
  {id: 6, name: '10 computers bought', locked: true},
  {id: 7, name: '10 GPU\'s bought', locked: true},
  {id: 8, name: '10 Motherboards bought', locked: true},
  {id: 9, name: '10 Power supplies bought', locked: true},
  {id: 10, name: '100 Coins hashed', locked: true},
  {id: 11, name: 'To the moon! 1000 coins hashed', locked: true},
  {id: 12, name: 'Home Data Center owner, 50 assets bought', locked: true},
  {id: 13, name: 'Cloud Data Center owner, 100 assets', locked: true},
  {id: 14, name: 'Crypto hustler, 100 coins hashed', locked: true},
  {id: 15, name: 'Crypto king, 1000 coins hashed', locked: true},
  {id: 16, name: 'First coin sold', locked: true},
  {id: 17, name: 'Crypto dealer, 10 coins sold', locked: true},
  {id: 17, name: 'Boss dealer, 100 coins sold', locked: true},
  {id: 18, name: 'Burn the circuits, run out of power', locked: true},
  {id: 19, name: 'Young money, cash money. Wallet contains 10 000 $', locked: true},
  {id: 20, name: 'You did it! 1 000 000 coins hashed. This is the end game. Nice job.', locked: true}
]

const achievementCatText = [
  {heading: 'Whats up!', text: 'My name is Pertti, the advisor cat. I shall guide you towards the game goal. GET ALL THE COINS AND TO THE MOON!'},
  {heading: 'Hurrr a Purrr', text: 'Cattastic day for you! Looks like there are couple of achievements to do.'},
  {heading: 'Meaow', text: 'I am not helping much? Am I? Well, it\'s not my fault if you cant click any faster.'},
  {heading: 'My ball of wool is!....', text: 'Oh sorry, I didn\'t pay attention. Get clicking you lazy player!'},
  {heading: 'What should we do today?', text: 'Maybe you should click faster to get more assets from the KittyCat PC store?'}
]

class AchievementsModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      achievementCatText: Math.floor(Math.random() * achievementCatText.length)
    }
    this.renderAchievement = this.renderAchievement.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.achievementCatText === achievementCatText.length - 1) {
        this.setState({ achievementCatText: 0 });
      } else {
        this.setState({ achievementCatText: this.state.achievementCatText + 1 });
      }
    }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderCatText() {
    return (
      <div className="talktext">
        <h2>
          {achievementCatText[this.state.achievementCatText].heading}
        </h2>
        <p>
          {achievementCatText[this.state.achievementCatText].text}
        </p>
        </div>
      )
  }

  renderAchievement(achievement) {
    const achievementEarned = find(this.props.achievements, {id: achievement.id})

    const className = 'fa achievement-icon' +
      (!achievementEarned && achievement.locked ? ' fa-lock' : '') +
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
      <Modal isOpen={this.props.isOpen} style={customStyles}>
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

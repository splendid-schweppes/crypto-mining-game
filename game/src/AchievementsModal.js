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
  {id: 1, name: '1. Your first coin', locked: true},
  {id: 2, name: '2. Ten coins', locked: true},
  {id: 3, name: '3. First asset bought', locked: true},
  {id: 4, name: '4. First PC bought', locked: true},
]


class AchievementsModal extends React.Component {
  constructor(props) {
    super(props)
    this.renderAchievement = this.renderAchievement.bind(this)
  }

  renderAchievement(achievement) {
    const achievementEarned = find(this.props.achievements, {id: achievement.id})

    const className = 'fa achievement-icon' +
      (!achievementEarned && achievement.locked ? ' fa-lock' : '') +
      (achievementEarned ? ' fa-unlock' : '')

    return (
      <Row key={achievement.name}>
        <Col mdOffset={3} md={6}>
          <div className="achievement-item-box">
          <p className="achievement-text">{achievement.name}</p>
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
                  <p>
                    Welcome to your achievements! I shall be your fluffy advisor cat.<br/>
                    0 / 100 completed.
                  </p>
                </div>
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

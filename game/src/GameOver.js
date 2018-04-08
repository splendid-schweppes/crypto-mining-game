import React, {Component} from 'react'
import {connect} from 'react-redux'
import {filter} from 'lodash'
import Modal from 'react-modal'

import {modal_styles} from './Config'
import {gameOverShown} from './Util'

import gameOverPicture from './svg_assets/game-over.png'

const GAME_OVER_ACHIEVEMENT_ID = 20

export const setGameOverShown = () =>
  window.localStorage.setItem('gameOverShown', JSON.stringify(true))

const isGameOver = achievements =>
  filter(achievements, {id: GAME_OVER_ACHIEVEMENT_ID}).length > 0

class GameOver extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameover: isGameOver(props.achievements),
      modalIsOpen: false,
      gameOverShown: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const gameover = isGameOver(nextProps.achievements)
    this.setState({gameover})

    if (gameover && !gameOverShown()) {
      setGameOverShown()
      this.setState({modalIsOpen: true})
    }
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen})
  }

  render() {
    return (
      <Modal
        isOpen={this.state.gameover && this.state.modalIsOpen}
        style={modal_styles}
      >
        <div>
          <div className="modal-close-button" onClick={this.toggleModal}>
            <span id="x">X</span>
          </div>
          <p>Game over man, you won!</p>
          <img
            src={gameOverPicture}
            alt="gameover"
            className="img-responsive game-over"
          />
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    achievements: state.achievements
  }
}

export default connect(mapStateToProps)(GameOver)

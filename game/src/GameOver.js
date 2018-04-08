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

    // setGameOverShown()
    console.log('gameOverShown', gameOverShown())

    console.log('gameover', gameover)

    // if (gameover && !gameOverShown()) {
    if (gameover) {
      console.log('gameover not yet shown, display winning modal')
      setGameOverShown()
      this.setState({modalIsOpen: true})
    }

    if (gameover) {
      console.log('gameover, setGameOverShown')
      // setGameOverShown()
    }
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen})
  }

  render() {
    return (
      <Modal isOpen={this.state.modalIsOpen} style={modal_styles}>
        <div>
          <p>Game over man, you won!</p>
          <img
            src={gameOverPicture}
            alt="gameover"
            className="img-responsive game-over"
          />
          <div className="modal-close-button" onClick={this.toggleModal}>
            <span id="x">X</span>
          </div>
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

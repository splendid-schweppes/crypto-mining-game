import React, { Component } from 'react'
import './BackgroundMusic.css'

export default class BackgroundMusic extends Component {
  constructor() {
    super()
    this.state = {
      playStateOnStorage: window.localStorage.getItem('bgmusic') || 'play'
    }
  }

  componentDidMount() {
    this._audio[this.state.playStateOnStorage]()
  }

  backGroundMusic = () => {
    const status = this.state.playStateOnStorage === 'pause' ? 'play' : 'pause'

    this._audio[status]()
    this.setState({playStateOnStorage: status})
    window.localStorage.setItem('bgmusic', status)
  }

  render() {
    const buttonClasses = this.state.playStateOnStorage === 'play' ? 'fa-pause-circle' : 'fa-play-circle-o'
    const classes = `fa fa-4x ${buttonClasses} music-button`

    return (
      <div className="audio-controls">
        <audio ref={(a) => this._audio = a} preload="true" src="audio/game_music.mp3" autoPlay loop />
        <div>
          <p>Background music</p>
        	<i className={classes} onClick={this.backGroundMusic}></i>
        </div>
      </div>
    )
  }
}

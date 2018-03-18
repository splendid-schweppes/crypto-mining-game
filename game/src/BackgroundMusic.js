import React, { Component } from 'react'
import './BackgroundMusic.css'

class BackgroundMusic extends Component {
    constructor() {
    super()
    this.state = {
      bgMusic: 'play',
      playStateOnStorage: window.localStorage.getItem("bgmusic")
    }
  }

  componentDidMount() {
    if (this.state.playStateOnStorage === 'pause') {
      this.setState({bgMusic: 'pause'});
      this._audio.pause();
    }
    if (this.state.playStateOnStorage === 'play') {
      this.setState({bgMusic: 'play'});
      this._audio.play();
    }
  }

  backGroundMusic = (e) => {
    console.log('wut', this.state.bgMusic);
    if (this.state.bgMusic === 'pause') {
      this.setState({bgMusic: 'play'});
      this._audio.play();
      window.localStorage.setItem("bgmusic", "play");
    } else {
      this.setState({bgMusic: 'pause'});
      this._audio.pause();
      window.localStorage.setItem("bgmusic", "pause");
    }
  }

  render() {
    const buttonClasses = this.state.bgMusic === 'play' ? 'fa fa-pause-circle' : 'fa fa-play-circle-o'
    const classes = `${buttonClasses} music-button`;
    console.log('classes', classes);
    return (
      <div className="audio-controls">
        <audio ref={(a) => this._audio = a} preload="true" src="audio/game_music.mp3" autoPlay loop/>
        <div>
          <p>Background music</p>
        	<i className={classes} onClick={this.backGroundMusic}></i>
        </div>
      </div>
    )
  }
}

export default BackgroundMusic

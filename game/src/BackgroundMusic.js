import React, { Component } from 'react'
import './BackgroundMusic.css'

class BackgroundMusic extends Component {
    constructor() {
    super()
    this.state = {
      bgMusic: 'play'
    }
  }

  componentDidMount() {
    const music = document.getElementById('music');
    const bgMusic = window.localStorage.getItem("bgmusic");
    if (bgMusic === 'pause') {
      this.setState({bgMusic: 'pause'});
      music.pause();
    }
    if (bgMusic === 'play') {
      this.setState({bgMusic: 'play'});
      music.play();
    }
  }

  backGroundMusic = () => {
    const music = document.getElementById('music');
    if (music.paused) {
      this.setState({bgMusic: 'play'});
      music.play();
      window.localStorage.setItem("bgmusic", "play");
    } else {
      this.setState({bgMusic: 'pause'});
      music.pause();
      window.localStorage.setItem("bgmusic", "pause");
    }
  }

  render() {
    return (
      <div className="audio-controls">
        <audio id="music" preload="true" src="audio/game_music.mp3" autoPlay loop/>
        <div>
          <p>Background music</p>
        	<i id="pButton" className={this.state.bgMusic === 'play' ? 'fa fa-pause-circle' : 'fa fa-play-circle-o'} onClick={this.backGroundMusic}></i>
        </div>
      </div>
    )
  }
}

export default BackgroundMusic

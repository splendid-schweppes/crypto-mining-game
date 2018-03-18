import React, { Component } from 'react'
import './BackgroundMusic.css'

class BackgroundMusic extends Component {
    constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    const music = document.getElementById('music');
    const bgMusic = window.localStorage.getItem("bgmusic");
    const pButton = document.getElementById('pButton');
    if (bgMusic === 'pause') {
      music.pause();
      pButton.className = "";
      pButton.className = "fa fa-play-circle-o";
      window.localStorage.setItem("bgmusic", "pause");
    }
    if (bgMusic === 'play') {
      music.play();
      pButton.className = "";
      pButton.className = "fa fa-pause-circle";
      window.localStorage.setItem("bgmusic", "play");
    }
  }

  backGroundMusic = () => {
    const music = document.getElementById('music');
    const pButton = document.getElementById('pButton');
    if (music.paused) {
        music.play();
        pButton.className = "";
        pButton.className = "fa fa-pause-circle";
        window.localStorage.setItem("bgmusic", "play");
    } else {
        music.pause();
        pButton.className = "";
        pButton.className = "fa fa-play-circle-o";
        window.localStorage.setItem("bgmusic", "pause");
    }
  }

  render() {
    return (
      <div className="audio-controls">
        <audio id="music" preload="true" src="audio/game_music.mp3" autoPlay/>
        <div>
          <p>Background music</p>
        	<i id="pButton" className="fa fa-pause-circle" onClick={this.backGroundMusic}></i>
        </div>
      </div>
    )
  }
}

export default BackgroundMusic
